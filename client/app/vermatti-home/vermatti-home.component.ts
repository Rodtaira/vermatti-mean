import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {VermattiHeaderComponent} from '../vermatti-header/index';
import {VermattiFooterComponent} from '../vermatti-footer/index';
import {VermattiCartComponent} from '../vermatti-cart/index';
import {VermattiBannerComponent} from '../vermatti-banner/index';
import {VermattiProductsComponent} from '../vermatti-products/index';

@Component({
  moduleId: module.id,
  templateUrl: 'vermatti-home.component.html'
})

export class VermattiHomeComponent implements OnInit {
  //currentUser: User;
  //users: User[] = [];

  constructor(private router: Router) {

  }

   ngOnInit() {
  // this.loadAllUsers();
}


}
