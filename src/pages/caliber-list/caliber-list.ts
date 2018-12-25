import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CaliberListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-caliber-list',
  templateUrl: 'caliber-list.html',
})
export class CaliberListPage {
  callback: any;
  calibers: any[] = [];
  calibers_temp: any[] = [];
  selectCaliber: string = "";
  oldCaliber: string = "";
  seachText: string = "";
  title:string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(JSON.stringify(this.navParams.get("calibers")));
    this.calibers = this.navParams.get("calibers");
    this.calibers_temp = this.calibers;
    this.selectCaliber = this.navParams.get("caliber");
    this.oldCaliber = this.navParams.get("caliber");
    this.callback = this.navParams.get("callback");
    this.title = this.navParams.get("title");
  }

  ionViewDidLoad() {
    
  }

  updateList() {

  }

  isValidate(c: string, st: string) {
    if (st == null) {
      return true;
    }

    if (st.length < 2) {
      return true;
    }

    if (c.replace(/([ .×])/g, "").toLowerCase().includes(st.replace(/([ .×])/g, "").toLowerCase())) {
      return true;
    } else {
      return false;
    }
  }

  // When Selected Changed, back to last page
  caliberChanged() {
    if (this.selectCaliber != '' && this.selectCaliber != this.oldCaliber) {
      var temp = this;
      this.callback(this.selectCaliber).then(() => {

        setTimeout(() => {
          temp.navCtrl.pop();
        }, 500);

        
      });
    }



  }

}
