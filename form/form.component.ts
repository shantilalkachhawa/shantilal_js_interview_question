import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FileUploadService } from '../../diginotary_ui/src/app/shared/services/file-upload/file-upload.service';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  providers:[FileUploadService],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  @Input() inputFormJson: any;
  @Output() formSubmit = new EventEmitter<any>();
  form!: FormGroup;

  constructor(private fb: FormBuilder,public fileUploadService:FileUploadService ) {}
  receivedData:any
  ngOnInit(): void {
    if (typeof window !== 'undefined' && window.localStorage )  {
      if(localStorage.getItem('session')){
        const storedData = localStorage.getItem('session');
        if (storedData) {
          this.receivedData = JSON.parse(storedData);
        }
      }
    }
    this.initializeForm();
    this.onFormValueChanges();
  }
  initializeForm(): void {
    const formControls: any = {};
    this.inputFormJson.forEach((field: any) => {
      const validators = [];
      if (field.validation_required) {
        validators.push(Validators.required);
      }
      if (field.type === 'email') {
        validators.push(Validators.email);
      }
      formControls[field.input_key] = ['', validators];
    });

    this.form = this.fb.group(formControls);
  }

  updateFieldValue(key: string | { [key: string]: any }, value?: any): void {
    
    if (this.form) {
      if (typeof key === 'string' && this.form.controls[key]) {
        this.form.patchValue({ [key]: value });
      
      } else if (typeof key === 'object') {
        this.form.patchValue(key);
      }
    }
  }
  

  onSubmit(): void {
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }
  filePreviews: { [key: string]: string } = {};

  async onFileSelected(event: Event, fieldName: string): Promise<void> {
    try {
      const inputElement = event.target as HTMLInputElement;
      if (!inputElement.files || inputElement.files.length === 0) return;
  
      const { file, base64 } = await this.fileUploadService.handleFileSelection(event);
      
      this.form.patchValue({ [fieldName]: file });
      this.filePreviews[fieldName] = base64; 
      setTimeout(() => {
        if (inputElement) {
          inputElement.value = '';
        }
      }, 0);
      
    } catch (error) {
      console.error('File selection error:', error);
    }
  }
  
  onDelete(fieldName: string): void {
    this.form.patchValue({ [fieldName]: null }); 
    delete this.filePreviews[fieldName]; 
  }
  
  onFormValueChanges(): void {
    this.form.get('zipCode')?.valueChanges.subscribe((zipCode: string) => {
      if (zipCode?.length === 5) {
        this.getStateAndCity(zipCode);
      }
    });
    this.form.get('firstName')?.valueChanges.subscribe(() => {
      this.updateFullName();
    });
    this.form.get('lastName')?.valueChanges.subscribe(() => {
      this.updateFullName();
    });
    this.form.patchValue({
      email:this.receivedData?.email
    })
  }

  updateFullName(): void {
    const firstName = this.form.get('firstName')?.value || '';
    const lastName = this.form.get('lastName')?.value || '';
    this.form.patchValue({
      fullName: `${firstName} ${lastName}`.trim()
    }, { emitEvent: false });
  }
  
  async getStateAndCity(zipCode: string): Promise<void> {
    if (zipCode.length === 5) {
      const zipData: { [key: string]: { city: string; state: string; country: string } } = {
        '10001': { city: 'New York', state: 'New York', country: 'USA' },
        '90001': { city: 'Los Angeles', state: 'California', country: 'USA' },
        '30301': { city: 'Atlanta', state: 'Georgia', country: 'USA' },
      };

      const location = zipData[zipCode] || { city: '', state: '', country: '' };

      this.form.patchValue({
        city: location.city,
        state: location.state,
        country: location.country,
      });
    }
  }

  getError(field: any): string {
    const control = this.form.get(field.input_key);
    if (control?.hasError('required')) {
      return `${field.label} is required`;
    }
    if (control?.hasError('email')) {
      return 'Invalid email address';
    }
    return '';
  }



  

}
