import { Document} from './document';

export class DocumentFactory {
  static empty(): Document {
    return new Document('', 0, 0, 0, 0, '', 0, '', '', '', 0, 0, '', '', '', '', '', '', 0, '', 0, 0, 0, 0, 0, 0);
  }
  static fromObject(rawProject: any): Document {

    return new Document(
      rawProject.uuid_,
      rawProject.fileEntryId,
      rawProject.groupId,
      rawProject.companyId,
      rawProject.userId,
      rawProject.userName,
      rawProject.versionUserId,
      rawProject.versionUserName,
      rawProject.createDate,
      rawProject.modifiedDate,
      rawProject.repositoryId,
      rawProject.folderId,
      rawProject.name,
      rawProject.extension,
      rawProject.mimeType,
      rawProject.title,
      rawProject.description,
      rawProject.extraSettings,
      rawProject.fileEntryTypeId,
      rawProject.version,
      rawProject.size_,
      rawProject.readCount,
      rawProject.smallImageId,
      rawProject.largeImageId,
      rawProject.custom1ImageId,
      rawProject.custom2ImageId
    );
  }
}
