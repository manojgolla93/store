import {NgModule} from '@angular/core';

import {RouterModule} from '@angular/router'
import { OrderComponent } from './order.component';
import { ostartComponent } from '../orderstar/ostart.component';
import { OrderFilterPipe } from './order-filter.component';
import { SharedModule } from '../shared/shared.module';
import { OrderService } from './order.service';

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'order', component:OrderComponent},
        ])
    ],
    declarations:[
        OrderComponent,
        ostartComponent, 
        OrderFilterPipe,
    ],
    providers:[
        OrderService
    ]
})

export class OrderModule{}