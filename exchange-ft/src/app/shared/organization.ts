export class Organization {
  constructor(
    public organizationId: number,
    public companyId: number,
    public parentOrganizationId: number,
    public treePath: string,
    public name: string,
    public type_: string,
    public recursable: number,
    public regionId: number,
    public countryId: number,
    public statusId: number,
    public comments: string
  ) {}
}
