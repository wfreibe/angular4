import { Component } from '@angular/core';

@Component({
  selector: 'exc-home',
  template: `
  <div class="ui container">
    <h1>Home</h1>
    <p>Das ist exchange-ft.</p>
    <a routerLink="../users" class="ui red button">
      Userliste ansehen
      <i class="right arrow icon"></i>
    </a>
  </div>
  `
})
export class HomeComponent { }
