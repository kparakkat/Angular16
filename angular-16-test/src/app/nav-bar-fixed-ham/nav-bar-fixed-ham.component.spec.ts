import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarFixedHamComponent } from './nav-bar-fixed-ham.component';

describe('NavBarFixedHamComponent', () => {
  let component: NavBarFixedHamComponent;
  let fixture: ComponentFixture<NavBarFixedHamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarFixedHamComponent]
    });
    fixture = TestBed.createComponent(NavBarFixedHamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
