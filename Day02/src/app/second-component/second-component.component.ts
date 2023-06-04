import { Component } from '@angular/core';
import { delay, from,of, map, take, tap, Observable } from 'rxjs';
import { ProductServiceService } from '../Services/product-service.service';
@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  productwithCategories$!:Observable<any>;
  constructor(private _productwithCategories:ProductServiceService){}
  products:any[]=[]

  ngOnInit(): void {

  this.productwithCategories$=this._productwithCategories.productsWithCategory$
  console.log(this.productwithCategories$)



    
  }

}
