import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMenuappear]'
})
export class MenuappearDirective {

  constructor(private el:ElementRef) {
    let lastScrollTop = 0
    window.addEventListener('scroll',()=>{
      let scrollTop = window.pageXOffset || document.documentElement.scrollTop
      if(scrollTop > lastScrollTop){
        el.nativeElement.style.top = '0px'
      }else{
        el.nativeElement.style.top = '61px'
      }
      lastScrollTop = scrollTop
    })
   }


}
