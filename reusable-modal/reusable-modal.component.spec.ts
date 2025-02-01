import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReusableModalComponent } from './reusable-modal.component';
import { EventEmitter } from '@angular/core';

describe('ReusableModalComponent', () => {
  let component: ReusableModalComponent;
  let fixture: ComponentFixture<ReusableModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReusableModalComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ReusableModalComponent);
    component = fixture.componentInstance;

    // Mock the @Input config property
    component.config = {
      heading: 'Test Modal',
      primaryBtnName: 'Submit',
      secondaryBtnName: 'Cancel',
    };

    // Initialize event emitters
    component.closeEvent = new EventEmitter<boolean>();
    component.submitEvent = new EventEmitter<boolean>();

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit true on handleClose', () => {
    spyOn(component.closeEvent, 'emit'); // Spy on the closeEvent emitter

    component.handleClose();

    expect(component.closeEvent.emit).toHaveBeenCalledWith(true);
  });

  it('should emit true on handleSubmit', () => {
    spyOn(component.submitEvent, 'emit'); // Spy on the submitEvent emitter
    // spyOn(console, 'log'); // Spy on console.log to verify the log message

    component.handleSubmit();

    // expect(console.log).toHaveBeenCalledWith('on submit'); // Verify log output
    expect(component.submitEvent.emit).toHaveBeenCalledWith(true);
  });
});
