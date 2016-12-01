import {Component} from '@angular/core';
import {EmitterService} from '../shared/emitter.service.js';

@Component({
  selector: 'contact',
  template: require('../views/contact.html'),
  providers: [EmitterService]
})

export class ContactComponent {
  response_: string;
  name: string;
  email: string;
  message: string;
  constructor(_emitterService: EmitterService) {
    this._emitterService = _emitterService;
  }
  leaveMessage() {
    this._emitterService.addContact(this.name, this.email, this.message)
      .subscribe(
        data => JSON.stringify(data),
        error => console.log('ERROR', error),
        () => console.log('DONE')
      );
  }
}
