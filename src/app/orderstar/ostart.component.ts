import {Component, OnChanges,Input} from '@angular/core';

@Component ({
selector:"ostart-star",
templateUrl:'./ostart.component.html',
styleUrls: ['./ostart.component.css']

})

export class ostartComponent implements OnChanges{

starWidth:number;
@Input() rating: number;

    ngOnChanges():void{
        
        this.starWidth=this.rating*86/5
    }
}