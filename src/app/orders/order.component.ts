import {Component, OnInit} from '@angular/core';
import {IOrder} from './order'
import {OrderService} from './order.service'
@Component({

selector: 'order-app',
templateUrl: './order.component.html'

})

export class OrderComponent implements OnInit {

title= "orderslist";

showImage:boolean=true;
imageWidth:number =50;
textBox:string;
errorMessage:string;
orders:IOrder[

];
constructor (private _orderService : OrderService){
}

toggleImage(): void{
    this.showImage = !this.showImage
}

onRatingClicked(message:string):void{
    this.title="orderslist:"+message
}
   

ngOnInit(): void {
   this._orderService.getOrders()
   .subscribe(orders =>this.orders=orders,
    error =>this.errorMessage=<any>error)
}

}
