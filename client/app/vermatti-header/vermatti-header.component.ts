import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'vermatti-header',
  templateUrl: 'vermatti-header.component.html'
})

export class VermattiHeaderComponent implements OnInit {
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
