import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
goals = [];
  constructor(private route: ActivatedRoute, private router: Router, private DataService : DataService ) {
    this.goals = this.DataService.getGoal();
  }

  ngOnInit() {
  }

}
