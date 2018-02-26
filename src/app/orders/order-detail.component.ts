import {Component} from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router'

@Component({
    selector:'order-detail',
    templateUrl:'./ordeer-detail.component.html'
})

export class OrderDetail{
    pageTitle="Order Detail";
    name:string;
    imgurl:string;
    desc:string

    constructor(private _route:ActivatedRoute,
            private _router:Router){}

    ngOnInit(): void{
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `: ${id}`

        this._route
            .queryParams
            .subscribe(params=>{
                this.name= params['name'];
                this.imgurl=params['img'];
                this.desc=params['desc']
            })
    }

    onBack(): void{
        this._router.navigate(['/orders'])
    }
}