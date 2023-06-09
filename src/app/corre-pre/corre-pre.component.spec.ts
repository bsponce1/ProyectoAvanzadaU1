import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrePreComponent } from './corre-pre.component';

describe('CorrePreComponent', () => {
  let component: CorrePreComponent;
  let fixture: ComponentFixture<CorrePreComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CorrePreComponent]
    });
    fixture = TestBed.createComponent(CorrePreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
