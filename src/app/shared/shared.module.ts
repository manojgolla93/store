import {NgModule} from '@angular/core'
import { starComponent } from './star.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
    imports:[
        FormsModule,
        CommonModule
    ],
    declarations:[
        starComponent,
    ],
    exports:[
        FormsModule,
        CommonModule,
        starComponent
    ]
})

export class SharedModule
{}