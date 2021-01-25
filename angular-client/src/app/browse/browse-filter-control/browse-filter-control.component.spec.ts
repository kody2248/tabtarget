import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseFilterControlComponent } from './browse-filter-control.component';

describe('BrowseFilterControlComponent', () => {
  let component: BrowseFilterControlComponent;
  let fixture: ComponentFixture<BrowseFilterControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseFilterControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseFilterControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
