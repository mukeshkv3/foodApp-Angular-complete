import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statusadmin',
  templateUrl: './statusadmin.component.html'
})
export class StatusadminComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  logout(){
    this._router.navigate(['home']);
  }
}
