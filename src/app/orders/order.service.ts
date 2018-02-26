import {Injectable} from '@angular/core';
import {IOrder} from './order';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/operator/map';
import 'rxjs/operator/catch';

@Injectable()

export class OrderService{
    private _orderUrl="api/orders.json";
constructor(private _http:Http){}


    getOrders():Observable<IOrder[]>{
        return this. _http.get(this._orderUrl)
             .map((response:Response)=> <IOrder[]>response.json())
              .catch(this.handleError)
    }
    private handleError(error:Response){
        return Observable.throw(error.json().error || "server error")

}
}