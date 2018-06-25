import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'exc-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  profile: any;
  exchange_id_uri: string;

  constructor(public auth: AuthService) { }

  ngOnInit() {
    if (this.auth.userProfile) {
      this.profile = this.auth.userProfile;
    } else {
      this.auth.getProfile((err, profile) => {
        this.profile = profile;
        this.exchange_id_uri = environment.exchangeft_id_uri;
      });
    }
  }

}
