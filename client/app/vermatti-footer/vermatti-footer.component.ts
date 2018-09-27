import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
  moduleId: module.id,
  selector: 'vermatti-footer',
  templateUrl: 'vermatti-footer.component.html'
})

export class VermattiFooterComponent implements OnInit {


  constructor(private router: Router) {

  }


   ngOnInit() {
  // this.loadAllUsers();
}


}
