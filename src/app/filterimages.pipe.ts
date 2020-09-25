import { Pipe, PipeTransform } from '@angular/core';    
    
@Pipe({    
  name: 'filterimages'    
})    
export class FilterimagesPipe implements PipeTransform {    
  transform(items: any[], laptop: string): any {
    if(laptop === 'all'){ return items } else    
    return items.filter(item =>{    
      return item.brand === laptop;
    });
  }
}

const Imagesdelatils = [    
  { "id": 1, "brand": "perro", "url": "assets/images/perro1.jpg" },    
  { "id": 2, "brand": "perro", "url": "assets/images/perro2.jpg" },
]