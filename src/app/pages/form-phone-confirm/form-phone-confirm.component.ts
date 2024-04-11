import { Component } from '@angular/core';

@Component({
  selector: 'app-form-phone-confirm',
  templateUrl: './form-phone-confirm.component.html',
  styleUrls: ['./form-phone-confirm.component.css', '../../templates/background2.css']
})
export class FormPhoneConfirmComponent {
  editPhone: boolean = false;
  phone: string = '3001234567';

  changeEditPhone(){
    this.editPhone = !this.editPhone;
  }
}
