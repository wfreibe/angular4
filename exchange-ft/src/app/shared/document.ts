export class Document {
  constructor(
    public uuid_: string,
    public fileEntryId: number,
    public groupId: number,
    public companyId: number,
    public userId: number,
    public userName: string,
    public versionUserId: number,
    public versionUserName: string,
    public createDate: string,
    public modifiedDate: string,
    public repositoryId: number,
    public folderId: number,
    public name: string,
    public extension: string,
    public mimeType: string,
    public title: string,
    public description: string,
    public extraSettings: string,
    public fileEntryTypeId: number,
    public version: string,
    public size_: number,
    public readCount: number,
    public smallImageId: number,
    public largeImageId: number,
    public custom1ImageId: number,
    public custom2ImageId: number
  ) {}
}
