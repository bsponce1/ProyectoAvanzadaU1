import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreNosucessComponent } from './corre-nosucess.component';

describe('CorreNosucessComponent', () => {
  let component: CorreNosucessComponent;
  let fixture: ComponentFixture<CorreNosucessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorreNosucessComponent]
    });
    fixture = TestBed.createComponent(CorreNosucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
