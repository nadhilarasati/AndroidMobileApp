import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ConfirmationPage } from '../confirmation/confirmation';

/**
 * Generated class for the ChooseMethodPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-method',
  templateUrl: 'choose-method.html',
})
export class ChooseMethodPage {

  checkOutButton: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.checkOutButton = ConfirmationPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseMethodPage');
  }

}
