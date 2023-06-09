import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorreNosucessfComponent } from './corre-nosucessf.component';

describe('CorreNosucessfComponent', () => {
  let component: CorreNosucessfComponent;
  let fixture: ComponentFixture<CorreNosucessfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorreNosucessfComponent]
    });
    fixture = TestBed.createComponent(CorreNosucessfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
