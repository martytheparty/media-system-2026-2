import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SftpSettings } from './sftp-settings';

describe('SftpSettings', () => {
  let component: SftpSettings;
  let fixture: ComponentFixture<SftpSettings>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SftpSettings]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SftpSettings);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
