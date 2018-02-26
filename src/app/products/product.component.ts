import {Component, OnInit} from '@angular/core';
import {IProduct} from './product'
import {ProductService} from './product.service'

@Component({
    selector:'app-product',
    templateUrl:'./product.component.html',
    //styles:['thead{color:red}']
    styleUrls:['./product.component.css']
})

export class ProductComponent implements OnInit{
    title="***Product List***";
    showImage:boolean=false;
    filterBox:string;
    imageWidth:number=50;
    products:IProduct[];
    errorMessage:string

    constructor(private _productService: ProductService){}

    toggleImage(): void{
        this.showImage = !this.showImage
    }
    onRatingClicked(message:string):void{
        this.title="Product List::"+message
    }

    ngOnInit(): void{
        this._productService.getProducts()
            .subscribe(products =>this.products=products,
            error =>this.errorMessage=<any>error)
    }
}

/*

One way Binding
    -Data Binding
    -Property binding
    -Event Binding
Two way binding
*/