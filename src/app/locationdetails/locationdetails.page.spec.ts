import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationdetailsPage } from './locationdetails.page';

describe('LocationdetailsPage', () => {
  let component: LocationdetailsPage;
  let fixture: ComponentFixture<LocationdetailsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LocationdetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
