import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LFTPage } from './lft.page';

describe('LFTPage', () => {
  let component: LFTPage;
  let fixture: ComponentFixture<LFTPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(LFTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
