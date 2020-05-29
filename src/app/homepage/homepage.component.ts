import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  myPrducts = ["abc","xyz","uvw","hhh","abc","xyz","uvw","hhh",'hge'];
  constructor() { }

  ngOnInit(): void {
  }

}
