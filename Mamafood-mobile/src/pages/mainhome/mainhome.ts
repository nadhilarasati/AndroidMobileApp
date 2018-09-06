import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App, MenuController, Nav } from 'ionic-angular';


/**
 * Generated class for the MainhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mainhome',
  templateUrl: 'mainhome.html',
})
export class MainhomePage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams, app: App, menu: MenuController) {
    menu.enable(true);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad MainhomePage');
  }

}
