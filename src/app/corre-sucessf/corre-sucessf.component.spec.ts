import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreSucessfComponent } from './corre-sucessf.component';

describe('CorreSucessfComponent', () => {
  let component: CorreSucessfComponent;
  let fixture: ComponentFixture<CorreSucessfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorreSucessfComponent]
    });
    fixture = TestBed.createComponent(CorreSucessfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
