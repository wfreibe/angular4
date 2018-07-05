export class Project {
  constructor(
    public groupId: number,
    public companyId: number,
    public creatorUserId: number,
    public classNameId: number,
    public classPK: number,
    public parentGroupId: number,
    public liveGroupId: number,
    public name: string,
    public description: string,
    public type_: number,
    public typeSettings: string,
    public friendlyURL: string,
    public site: number,
    public active_: number,
  ) {}
}
