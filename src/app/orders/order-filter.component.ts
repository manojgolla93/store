import {Pipe, PipeTransform} from '@angular/core';
import {IOrder} from'./order';
@Pipe ({

    name: 'orderFilter'
})

export class OrderFilterPipe implements PipeTransform{

transform (value:IOrder[],filterBy:string):IOrder[]{

    filterBy= filterBy? filterBy.toLowerCase():null;
    return filterBy? value.filter((order:IOrder)=>
    order.orderName.toLowerCase().indexOf(filterBy) !== -1):value;
}

}