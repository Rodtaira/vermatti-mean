import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  templateUrl: 'vermatti-home.component.html'
})

export class VermattiHomeComponent implements OnInit {
  //currentUser: User;
  //users: User[] = [];

  constructor(private router: Router,) {

  }

  goToLogin(){
    this.router.navigate(['/login']);
    console.log('clicked');
  }

   ngOnInit() {
  // this.loadAllUsers();
} 


}
