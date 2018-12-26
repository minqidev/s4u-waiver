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
  searchText: string = "";
  title: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //console.log(JSON.stringify(this.navParams.get("calibers")));
    this.calibers = this.navParams.get("calibers");

    this.calibers_temp = [];
    this.selectCaliber = this.navParams.get("caliber");
    this.oldCaliber = this.navParams.get("caliber");
    this.callback = this.navParams.get("callback");
    this.title = this.navParams.get("title");

    this.updateList();
  }

  ionViewDidLoad() {

  }

  checkAddNewButton() {

  }

  updateList() {
    while (this.calibers_temp.length > 0) {
      this.calibers_temp.pop();
    }
    console.log("search text is " + this.searchText.length);
    if (this.searchText.length < 2) {
      var index = 0;
      this.calibers.forEach(c => {
        index++;
        if(index<30 && c.trim() != ''){
          this.calibers_temp.push(c);

        } else {
          return;
        }
        

      });


      return;
    }

    var index = 0;
    this.calibers.forEach(c => {
      if (index < 30 && c.replace(/([ .×])/g, "").toLowerCase().includes(this.searchText.replace(/([ .×])/g, "").toLowerCase())) {
        index++;

        this.calibers_temp.push(c);

      }
    });
  }

  isValidate(c: string, st: string) {
    if (st == null) {
      return false;
    }

    if (st.length < 2) {
      return false;
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
