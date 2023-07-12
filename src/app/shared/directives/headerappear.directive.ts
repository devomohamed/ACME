import { Directive, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Directive({
  selector: '[appHeaderappear]'
})
export class HeaderappearDirective {

  constructor(private el:ElementRef,private window: Window,private route:ActivatedRoute,private router: Router) {
    let lastScrollTop = 0
    el.nativeElement.style.backgroundColor = 'red'
    window.addEventListener('scroll',()=>{
      let scrollTop = window.pageXOffset || document.documentElement.scrollTop
      if(scrollTop > lastScrollTop){
        el.nativeElement.style.top = '-80px'
      }else{
        el.nativeElement.style.top = '0px'
      }
      lastScrollTop = scrollTop
    })

   }
}
