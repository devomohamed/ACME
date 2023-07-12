import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvMovieComponent } from './tv-movie.component';

describe('TvMovieComponent', () => {
  let component: TvMovieComponent;
  let fixture: ComponentFixture<TvMovieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvMovieComponent]
    });
    fixture = TestBed.createComponent(TvMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
