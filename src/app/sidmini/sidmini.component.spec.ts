import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidminiComponent } from './sidmini.component';

describe('SidminiComponent', () => {
  let component: SidminiComponent;
  let fixture: ComponentFixture<SidminiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidminiComponent]
    });
    fixture = TestBed.createComponent(SidminiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
