import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'exc-callback',
  template: `
    <div class="ui active dimmer">
      <div class="ui large text loader">Daten werden geladen...</div>
    </div>
  `,
  styles: []
})
export class CallbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
