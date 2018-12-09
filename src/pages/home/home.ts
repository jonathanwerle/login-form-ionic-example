import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username;
  password;

  constructor(public navCtrl: NavController) {

  }

  tellMeYourSecrets() {
    console.log("Your username is: ");
    console.log(this.username);
    console.log("Your password is: ");
    console.log(this.password);
  }

}
