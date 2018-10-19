import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'vermatti-products',
  templateUrl: 'vermatti-products.component.html'
})

export class VermattiProductsComponent implements OnInit {


  constructor(private router: Router) {

  }

  ngOnInit() {
 // this.loadAllUsers();
}

}
