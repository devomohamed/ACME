import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MytvComponent } from './mytv.component';

describe('MytvComponent', () => {
  let component: MytvComponent;
  let fixture: ComponentFixture<MytvComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MytvComponent]
    });
    fixture = TestBed.createComponent(MytvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
