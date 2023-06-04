import { Component } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  constructor(private productService:ProductServiceService){

  };

  productNum:number
  enter(){
    this.productService.count=this.productNum;
    console.log(this.productService.count, this.productNum);
  }
}
