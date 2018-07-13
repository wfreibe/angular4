import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDropboxComponent } from './organization-dropbox.component';

describe('OrganizationDropboxComponent', () => {
  let component: OrganizationDropboxComponent;
  let fixture: ComponentFixture<OrganizationDropboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationDropboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDropboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
