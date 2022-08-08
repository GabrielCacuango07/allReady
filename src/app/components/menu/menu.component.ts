import { Component, OnInit } from '@angular/core';
import { clippingParents } from '@popperjs/core';
import { menuService } from 'src/app/services/menu.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 menu:any[]=[];

  constructor( private _menuService:menuService) { }

  ngOnInit(): void {
    this.menu=this._menuService.getMenu();
    console.log(this.menu);


  }


}
