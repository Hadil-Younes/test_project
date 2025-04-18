import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidbareComponent } from './sidbare.component';

describe('SidbareComponent', () => {
  let component: SidbareComponent;
  let fixture: ComponentFixture<SidbareComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidbareComponent]
    });
    fixture = TestBed.createComponent(SidbareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
