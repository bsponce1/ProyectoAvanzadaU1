import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreoSucessComponent } from './correo-sucess.component';

describe('CorreoSucessComponent', () => {
  let component: CorreoSucessComponent;
  let fixture: ComponentFixture<CorreoSucessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorreoSucessComponent]
    });
    fixture = TestBed.createComponent(CorreoSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
