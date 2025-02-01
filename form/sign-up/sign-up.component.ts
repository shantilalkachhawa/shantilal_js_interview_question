import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { FormComponent } from '../../../../shared/components/form/form.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ApiService } from '../../../../shared/services/api/api.service';
import { Location } from '@angular/common';
import { catchError, throwError } from 'rxjs';
import { sha256 } from '../../../../shared/services/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [FormComponent,RouterModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements AfterViewInit {
  @ViewChild(FormComponent) formComponent!: FormComponent;

  currentUrl :string =''
  receivedData: any;
  constructor(public activateRoute:ActivatedRoute,public router :Router,public apiService :ApiService,private location: Location,
    private toastr: ToastrService
  ){
    const  url = this.router.url.split('/').pop();
    if(url){
      this.currentUrl = url;
    }
    if(this.currentUrl){
     
    }
  }
  inputFormSignUp = [
    { type: 'email', placeholder: 'Enter email', label: 'Email', validation_required: true, colClass: 'col-sm-12' ,input_key:'email' },
    // { type: 'select', placeholder: '', label: 'Gender', validation_required: true, options: ['Male', 'Female'], colClass: 'col-md-6 col-sm-12' },
  ];
  inputFormLogin = [
    { type: 'email', placeholder: 'Enter email', label: 'Email', validation_required: true, colClass: 'col-sm-12',input_key:'email' },
    { type: 'password', placeholder: 'Enter password', label: 'Password', validation_required: true, colClass: 'col-sm-12' ,input_key:'password'},
  ];
  inputFormOtp = [
    { type: 'text', placeholder: 'Enter otp', label: 'Otp', validation_required: true, colClass: 'col-sm-12' ,input_key:'otp'},
  ];
  
  ngOnInit(){
    if (typeof window !== 'undefined' && window.localStorage )  {
      if(localStorage.getItem('session')){
        const storedData = localStorage.getItem('session');
        if (storedData) {
          this.receivedData = JSON.parse(storedData);
        }
      }
    }
  }

  onFormSubmit(event: any) {
    if(this.currentUrl ==='sign-up'){
      this.signUp(event)
     
    }else if(this.currentUrl ==='login'){
      this.login(event)
    }else if(this.currentUrl ==='otp'){
      this.verifyKeyAndSubmit(event)
    }
  }
  onBack(){
    this.location.back()
  }
  signUp(value:any){
    this.apiService.post('public/request_key', value).pipe(
      catchError(error => {
        this.toastr.error(error.Message)
        console.error('Error:', error);
        return throwError(() => error); 
      })
    ).subscribe(result => {
      if (result) {
        let data:any ={
          session:result.session,
          email:value.email
        }
        this.toastr.success('Otp sent to mail!')

        localStorage.setItem('session', JSON.stringify(data));
        this.router.navigate(['auth/otp'])
      }
    })
  }
  verifyKeyAndSubmit(value:any){
    this.receivedData
    const payload = {
      key:value?.otp,
      email: this.receivedData.email,
      session: this.receivedData.session,
    };
    this.apiService.post('public/verify_key', payload).pipe(
      catchError(error => {
        this.toastr.error(error.Message)
        return throwError(() => error); 
      })
    ).subscribe(result => {
      if (result) {
        this.toastr.success("Login success")
        localStorage.setItem('token', result?.token);
        localStorage.setItem('aid', result?.user);
        this.router.navigate(['profile'])
      }
    })
  }
  async login(value:any){
    const encode_pass =await sha256(value.password)
    let  updatReq ={
      ...value,
      password:encode_pass
    }
    this.apiService.post('public/loginByPassword', updatReq).pipe(
      catchError(error => {
        this.toastr.error(error.Message)
        return throwError(() => error); 
      })
    ).subscribe(result => {
      if (result) {
        localStorage.setItem('token', result?.token);
        this.router.navigate(['dashboard'])
        this.toastr.success(result.Message)
      }
    })
  }
  ngAfterViewInit(): void {
    if (this.currentUrl === 'sign-up' && this.receivedData) {
      if (this.formComponent) {
        this.formComponent.updateFieldValue('email', this.receivedData?.email);
      }
    }
  }


}
