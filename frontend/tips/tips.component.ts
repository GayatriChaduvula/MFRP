import { Component, Input, OnInit } from '@angular/core';
interface TipsImage{
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-tips',
  templateUrl: './tips.component.html',
  styleUrls: ['./tips.component.css']
})
export class TipsComponent implements OnInit {
  @Input()  images: TipsImage[]=[]
  @Input() indicators=true;
  @Input() controls=true;
  @Input() autoSlide=false;
  @Input() slideInterval=3000; 
  selectedIndex=0;
  constructor() { }

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();

    }
  }
  autoSlideImages():void{
    setInterval(() => {
      this.onNextClick();
    },
    this.slideInterval);
  }
  //sets index of image on dot/indicator click 
  selectImage(index:number):void{
    this.selectedIndex = index ;
  }

  onPrevClick():void{
    if(this.selectedIndex===0){
      this.selectedIndex=this.images.length-1;
    }
    else{
      this.selectedIndex--;
    }

  }
  onNextClick():void{
    if(this.selectedIndex===this.images.length-1){
      this.selectedIndex=0;
    }
    else{
      this.selectedIndex++;
    }
  }

}
