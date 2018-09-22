import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import {VermattiHeaderComponent} from '../vermatti-header/index'
import {VermattiCartComponent} from '../vermatti-cart/index'

@Component({
  moduleId: module.id,
  templateUrl: 'vermatti-home.component.html'
})

export class VermattiHomeComponent implements OnInit {
  //currentUser: User;
  //users: User[] = [];

  constructor(private router: Router,) {

  }

   ngOnInit() {
  // this.loadAllUsers();
}


}
