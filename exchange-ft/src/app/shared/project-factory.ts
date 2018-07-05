import { Project } from './project';

export class ProjectFactory {
  static empty(): Project {
    return new Project(0, 0, 0, 0, 0, 0, 0, '', '', 0, '', '', 0, 0);
  }
  static fromObject(rawProject: any): Project {

    return new Project(
      rawProject.groupId,
      rawProject.companyId,
      rawProject.creatorUserId,
      rawProject.classNameId,
      rawProject.classPK,
      rawProject.parentGroupId,
      rawProject.liveGroupId,
      rawProject.name,
      rawProject.description,
      rawProject.type_,
      rawProject.typeSettings,
      rawProject.friendlyURL,
      rawProject.site,
      rawProject.active_
    );
  }
}
