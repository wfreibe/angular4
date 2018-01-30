export class ErrorMessage {
  constructor(
    public forControl: string,
    public forValidator: string,
    public text: string
  ) { }
}

export const UserFormErrorMessages = [
  new ErrorMessage('screenName', 'required', 'Der Screen Name muss angegeben werden'),
  new ErrorMessage('emailAddress', 'required', 'Die E-Mail Adresse muss angegeben werden'),
  new ErrorMessage('emailAddress', 'email', 'Die E-Mail Adresse ist nicht korrekt'),
  new ErrorMessage('emailAddress', 'emailExists', 'Die E-Mail existiert bereits'),
  new ErrorMessage('greeting', 'required', 'Ein Greeting muss angegeben werden'),
  new ErrorMessage('firstName', 'required', 'Es muss der Vorname angegeben werden'),
  new ErrorMessage('lastName', 'required', 'Es muss der Nachname angegeben werden'),
  new ErrorMessage('jobTitle', 'required', 'Es muss der Beruf angegeben werden')
];

