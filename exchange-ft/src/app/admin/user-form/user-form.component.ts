import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

import { User } from '../../shared/user';
import { UserFactory } from '../../shared/user-factory';
import { UserStoreService } from '../../shared/user-store.service';
import { UserFormErrorMessages } from './user-form-error-messages';
import { UserValidators} from '../shared/user.validators';

@Component({
  selector: 'exc-user-form',
  templateUrl: './user-form.component.html'
})
export class UserFormComponent implements OnInit {

  user = UserFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingUser = false;
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private us: UserStoreService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const userId = this.route.snapshot.params['userId'];
    if (userId) {
      this.isUpdatingUser = true;
      this.us.getSingle(userId)
        .subscribe(user => {
          this.user = user;
          this.initUser();
        });
    }
    this.initUser();
  }

  initUser() {
    // this.buildAuthorsArray();
    // this.buildThumbnailsArray();

    this.myForm = this.fb.group({
      screenName: [this.user.screenName, Validators.required],
      // emailAddress: [this.user.emailAddress, [Validators.required, Validators.email]],
      emailAddress: [this.user.emailAddress, [
        Validators.required,
        Validators.email
      ], this.isUpdatingUser ? null :
        UserValidators.emailExists(this.us)],
      greeting: this.user.greeting,
      /*
      isbn: [this.book.isbn, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(13)
      ]],
      */
      firstName: [this.user.firstName, Validators.required],
      lastName: [this.user.lastName, Validators.required],
      jobTitle: [this.user.jobTitle, Validators.required],
      userId: [this.user.userId],
    });
    this.myForm.statusChanges.subscribe(() => this.updateErrorMessages());
  }

  updateErrorMessages() {
    this.errors = {};
    for (const message of UserFormErrorMessages) {
      const control = this.myForm.get(message.forControl);
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
    const user: User = UserFactory.fromObject(this.myForm.value);
    if (this.isUpdatingUser) {
      this.us.update(user).subscribe(res => {
        this.router.navigate(['../../users', user.userId], {relativeTo: this.route });
      });
    } else {
      this.us.create(user).subscribe(res => {
        this.user = UserFactory.empty();
        this.myForm.reset(UserFactory.empty());
      });
    }
  }
}
