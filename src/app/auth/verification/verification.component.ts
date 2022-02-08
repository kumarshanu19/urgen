import { Component, OnInit, ViewChild } from '@angular/core';
import { Config } from 'ng-otp-input/lib/models/config';

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  otp: any;
  showOtpComponent = true;
  @ViewChild('ngOtpInput', { static: false}) ngOtpInput: any;
  config :Config = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '0',
    inputStyles: {
      'width': '40px',
      'height': '40px',
      'background-color': 'transparent',
      'color': '#fff',
      'border': 'none',
      'border-radius': '0',
      'border-bottom': '2px solid #fff'
    }
  };
  reload() {
    window.location.reload();
  }
  onOtpChange(otp:any) {
    this.otp = otp;
  }

  setVal(val:any) {
    this.ngOtpInput.setValue(val);
  }

  toggleDisable(){
    if(this.ngOtpInput.otpForm){
      if(this.ngOtpInput.otpForm.disabled){
        this.ngOtpInput.otpForm.enable();
      }else{
        this.ngOtpInput.otpForm.disable();
      }
    }
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }

}
