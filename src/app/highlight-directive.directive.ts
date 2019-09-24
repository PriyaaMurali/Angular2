import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightDirective]'
})

export class HighlightDirectiveDirective {

  
@HostListener('mouseenter') onMouseEnter() {
  this.highlight('Blue');
}

@HostListener('mouseleave') onMouseLeave() {
  this.highlight(null);
}
constructor(private el:ElementRef){}
private highlight(color: string) {
  this.el.nativeElement.style.backgroundColor = color;
}

  // constructor(private refElement:ElementRef,ref:ElementRef) { 
    
  //   this.refElement.nativeElement.style.backgroundColor = 'yellow';
    
  // }

  

}
