import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutemeComponent } from './abouteme.component';

describe('AboutemeComponent', () => {
  let component: AboutemeComponent;
  let fixture: ComponentFixture<AboutemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutemeComponent]
    });
    fixture = TestBed.createComponent(AboutemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
