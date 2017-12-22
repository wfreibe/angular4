export class User {
  constructor(
    public userId: number,
    public contactId: number,
    public screenName: string,
    public emailAddress: string,
    public languageId: string,
    public greeting: string,
    public firstName: string,
    public lastName: string,
    public jobTitle: string
  ) { }
}
