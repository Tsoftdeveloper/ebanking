import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddBenePage } from './add-bene.page';

describe('AddBenePage', () => {
  let component: AddBenePage;
  let fixture: ComponentFixture<AddBenePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddBenePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
