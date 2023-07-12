import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallbanarComponent } from './smallbanar.component';

describe('SmallbanarComponent', () => {
  let component: SmallbanarComponent;
  let fixture: ComponentFixture<SmallbanarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SmallbanarComponent]
    });
    fixture = TestBed.createComponent(SmallbanarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
