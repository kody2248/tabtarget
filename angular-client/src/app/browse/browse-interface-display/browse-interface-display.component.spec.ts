import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseInterfaceDisplayComponent } from './browse-interface-display.component';

describe('BrowseInterfaceDisplayComponent', () => {
  let component: BrowseInterfaceDisplayComponent;
  let fixture: ComponentFixture<BrowseInterfaceDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowseInterfaceDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseInterfaceDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
