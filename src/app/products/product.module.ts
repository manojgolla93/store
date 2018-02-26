import {NgModule} from '@angular/core';
import { ProductComponent } from './product.component';
import { ProductFilterPipe } from './product-filter.component';
import { ProductDetail } from './product-detail.component';
import { ProductService } from './product.service';
import { SharedModule } from '../shared/shared.module';
import {RouterModule} from '@angular/router'

@NgModule({
    imports:[
        SharedModule,
        RouterModule.forChild([
            {path:'products', component:ProductComponent},
            {path:'products/:id', component:ProductDetail}
        ])
    ],
    declarations:[
        ProductComponent,
        ProductFilterPipe,
        ProductDetail
    ],
    providers:[
        ProductService
    ]
})

export class ProductModule{}