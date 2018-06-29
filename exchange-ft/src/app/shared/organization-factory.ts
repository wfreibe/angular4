import { Organization } from './organization';

export class OrganizationFactory {
  static empty(): Organization {
    return new Organization(0, 0, 0, '', '', '', 0, 0, 0, 0, '');
  }
  static fromObject(rawOrganization: any): Organization {

    // console.log(rawOrganization);

    return new Organization(
      rawOrganization.organizationId,
      rawOrganization.companyId,
      rawOrganization.parentOrganizationId,
      rawOrganization.treePath,
      rawOrganization.name,
      rawOrganization.type_,
      rawOrganization.recursable,
      rawOrganization.regionId,
      rawOrganization.countryId,
      rawOrganization.statusId,
      rawOrganization.comments,
    );
  }
}
