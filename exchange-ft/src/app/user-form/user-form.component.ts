import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../shared/user';
import { UserFactory } from '../shared/user-factory';
import { UserStoreService } from '../shared/user-store.service';
import { UserFormErrorMessages } from './user-form-error-messages';
@Component({
  selector: 'exc-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  user = UserFactory.empty();

  errors: { [key: string]: string } = {};
  constructor(private us: UserStoreService) { }

  ngOnInit() {
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of UserFormErrorMessages) {
      const control = this.myForm.form.get(message.forControl);
      if (control &&
        control.dirty &&
        control.invalid &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }

  submitForm() {
    const user = UserFactory.fromObject(this.user);
    this.us.create(user).subscribe(res => {
      this.user = UserFactory.empty();
      this.myForm.reset(UserFactory.empty());
    });
  }
}
