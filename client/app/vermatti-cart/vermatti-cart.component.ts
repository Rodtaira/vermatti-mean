import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'vermatti-cart',
  templateUrl: 'vermatti-cart.component.html'
})

export class VermattiCartComponent implements OnInit {


  constructor(private router: Router,) {

  }

  goToCart(){
    console.log('clicked');
    this.router.navigate(['/login']);

  }

   ngOnInit() {
  // this.loadAllUsers();
}


}
