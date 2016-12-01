export class Contact {
  user: string;
  mail: string;
  message: string;
  constructor(
    _user: string,
    _mail: string,
    _message: string
  ) {
    this.user = _user;
    this.mail = _mail;
    this.message = _message;
  }
}
