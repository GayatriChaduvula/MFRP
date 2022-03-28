import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm = '';
  constructor(activatedRoute:ActivatedRoute,private router:Router) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm) this.searchTerm = params.searchTerm;
    });
   }

  ngOnInit(): void {
  }

  search(term:string):void{
    if(term)
    this.router.navigateByUrl('/search/'+ term);
  }
  images = [
    {
      imageSrc:
      'https://1.bp.blogspot.com/-VCkjsS1Tfmo/XgzLILEh5oI/AAAAAAAAACA/Yg7TKYf6VYUlNm33vg35es80Zq3yRMJLwCLcBGAsYHQ/s1600/manchuri.jpg',
      imageAlt: 'nature1',
      
    },
    {
      imageSrc:
        'https://i2.wp.com/kalimirchbysmita.com/wp-content/uploads/2016/05/Lakhnawi-Veg-Biryani-03.jpg',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        'https://myfoodstory.com/wp-content/uploads/2020/09/Chilli-Garlic-Noodles-3.jpg',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        'https://st.depositphotos.com/1875497/3893/i/450/depositphotos_38938669-stock-photo-velvet-red-cake.jpg',
      imageAlt: 'person2',
    },
  ]
}
