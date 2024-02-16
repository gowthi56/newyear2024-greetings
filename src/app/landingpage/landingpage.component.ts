import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent {
  name: any
  opennewTab: boolean = false
  currentTab: boolean = true
  constructor(private router: Router) { }

  myinp(e: any) {
    this.name = e.target.value
  }

  inputPage() {
    if (this.name) {
      this.currentTab = false
      this.router.navigate(['/user'], { queryParams: { name: this.name } });
    }
  }
}