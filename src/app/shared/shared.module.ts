import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeaderappearDirective } from './directives/headerappear.directive';
import { MenuIconComponent } from './components/menu-icon/menu-icon.component';
import { MovieComponent } from './components/movie/movie.component';
import { TextLimitPipe } from './pipes/text-limit.pipe';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { MenuappearDirective } from './directives/menuappear.directive';
import { HeroComponent } from './components/hero/hero.component';
import { SmallbanarComponent } from './components/smallbanar/smallbanar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonComponent } from './components/person/person.component';
import { TvMovieComponent } from './components/tv-movie/tv-movie.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HeaderComponent,
    HeaderappearDirective,
    MenuIconComponent,
    MovieComponent,
    TextLimitPipe,
    FooterComponent,
    MenuappearDirective,
    HeroComponent,
    SmallbanarComponent,
    PersonComponent,
    TvMovieComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    CarouselModule
  ],exports:[
    HeaderComponent,
    MovieComponent,
    FooterComponent,
    HeroComponent,
    SmallbanarComponent,
    PersonComponent,
    TvMovieComponent,
    CarouselModule
  ]
})
export class SharedModule { }
