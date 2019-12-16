import { DataService } from './../data.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  itemCount:number=4;
  btnText:string="Add an Item";
  goalText:string="My first life goal";
  goals:any=[] ;
  constructor(private router: Router, private DataService: DataService) {
this.goals = this.DataService.getGoal();

   }

  ngOnInit() {
  }

  Additem()
  {
    //this.goals.push(this.goalText);
   this.DataService.goals.push(this.goalText);
    this.goalText='';
    //this.itemCount=this.goals.length ;
    this.itemCount=this.DataService.goals.length;
  }

}
