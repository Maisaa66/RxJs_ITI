import { Component } from '@angular/core';
import { Product } from '../Schemas/product.schema';
import { ProductServiceService } from '../Services/product-service.service';
import { Observable, map, tap, from, delay, take , switchMap, interval} from 'rxjs';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent {
  products$: Observable<any>;
  try:any;
  products:any[]=[]
  
constructor(private productService: ProductServiceService){}
productNum:number;
ngOnInit(): void {
  this.products$ = interval(1000).pipe(
    switchMap(() => this.productService.getProducts()),
    map(response => response.products)
  );
}


enter(){
  this.productService.count=this.productNum;
  console.log(this.productService.count, this.productNum);
}
}

