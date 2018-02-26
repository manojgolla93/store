import {Component, OnChanges,Input,
        Output,EventEmitter} from '@angular/core';

@Component({
    selector:'manoj-star',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})

export class starComponent implements OnChanges{
    starWidth:number;
    @Input() rating:number;
    @Output() ratingClicked:EventEmitter<string>= new EventEmitter<string>()
    ngOnChanges():void{
        this.starWidth = this.rating*86/5
    }

    onStar(): void{
        this.ratingClicked.emit(`The rating clicked is ${this.rating}`)
    }
}


/*
function add(a,b){
    return a+b
}
+ $
add(1,2)
*/

