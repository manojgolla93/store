import {Component} from '@angular/core'

@Component({
    selector:'app-root',
    template:`<div>
       <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
            <a class="navbar-brand">Angular2</a>
            </div>
                <ul class="nav navbar-nav">
                    <li class="active"><a [routerLink]="['/home']">Home</a></li>
                    <li><a [routerLink]="['/products']">Products</a></li>
                    <li><a  [routerLink]="['/order']">Orders</a></li>
                    
                </ul>
        </div>
        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    </div>`
})

export class AppComponent{
   
}
