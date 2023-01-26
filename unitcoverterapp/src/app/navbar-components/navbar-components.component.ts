import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-components',
  templateUrl: './navbar-components.component.html',
  styleUrls: ['./navbar-components.component.css']
})
export class NavbarComponentsComponent {
  @Output() SelectedParams= new EventEmitter<any>()

    unitSelect="All"

    unit:any[]=[
      {value:"Meters",name:"Meters"},
      {value:"Liters",name:"Liters"},
      {value:"Meters square",name:"Meters square"},
    ]

    unitSearch(){
      const params={
        unit:this.unitSelect
      }
      this.SelectedParams.emit(params)
    }
}
