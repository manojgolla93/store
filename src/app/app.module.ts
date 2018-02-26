import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser'
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component'
import { ManojComponent } from './manoj.component';
import { NotFound } from './shared/notFound.component';
import { HomeWork } from './home/home.component';
import { ProductModule } from './products/product.module';
import { OrderModule } from './orders/order.module';
@NgModule({
    imports:[
        BrowserModule ,
        FormsModule,
        HttpModule,
        ProductModule,
        OrderModule,
        RouterModule.forRoot([
            {path:'home', component:HomeWork},
            {path:'',redirectTo:'home',pathMatch:"full"},
            {path:'**',component:NotFound}
        ])
    ],
    declarations:[
        AppComponent,
        ManojComponent,
        NotFound,
        HomeWork
    ],
    bootstrap:[AppComponent]

})

export class AppModule{}