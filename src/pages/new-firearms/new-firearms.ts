import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { CaliberListPage } from '../caliber-list/caliber-list';
/**
 * Generated class for the NewFirearmsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-firearms',
  templateUrl: 'new-firearms.html',
})
export class NewFirearmsPage {
  item: item = new item();
  segment: string = "info";
  calibers: any[] = [];
  inputCalibers: any[] = [];

  // mfg
  mfgs: any[] = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public httpClient: HttpClient) {
    var temp = this;
    httpClient.get("/assets/1.txt", { responseType: 'text' }).subscribe((res) => {


      var el = document.createElement('html');
      el.innerHTML = "<html><head><title>titleTest</title></head><body>" + res + "</body></html>";
      var trs = el.getElementsByTagName("tr");



      for (var i = 1; i < trs.length; i++) {
        var text = "";
        for (var j = 0; j < trs[i].getElementsByTagName("td").length; j++) {
          text += trs[i].getElementsByTagName("td")[j].innerText.trim() + "|";
        }

        temp.calibers.push(trs[i].getElementsByTagName("td")[0].innerText.trim());

      }


    });


    httpClient.get("/assets/2.txt", {}).subscribe((res: []) => {
      temp.mfgs = res;
      console.log(temp.mfgs.length);
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewFirearmsPage');
  }

  searchInputName: string = "";

  // Ion Footer Suggest Function
  setSearchInput(element) {
    if (element != this.searchInputName) {
      this.inputCalibers = [];
      this.searchInputName = element;
    }
  }

  checkSearchInput(name, element) {
    if (name == this.searchInputName && this.inputCalibers.length > 0) {
      element.setFocus();
    }
  }

  searchInput(value, name) {
    this.inputCalibers = [];

    if (value.length > 1) {
      var index = 0;
      this.calibers.forEach((element: string) => {
        if (index < 3 && element.replace(/([ .×])/g, "").toLocaleLowerCase().includes(value.replace(/([ .×])/g, "").toLocaleLowerCase())) {
          this.inputCalibers.push(element);
          index++;
        }

      });

    }

    console.log(this.inputCalibers);
  }

  showCaliberList(name) {
    var temp = this;
    var myCallbackFunction = function (_params) {
      return new Promise((resolve, reject) => {
        temp.item.caliber = _params;
        resolve();
      });
    }

    if(name == 'mfg'){
      myCallbackFunction = function (_params) {
        return new Promise((resolve, reject) => {
          temp.item.manufacturer = _params;
          resolve();
        });
      }

      this.navCtrl.push(CaliberListPage, { "title":"Manufacturer","calibers": this.mfgs, "caliber": this.item.manufacturer, "callback": myCallbackFunction });
      return;
    }


    this.navCtrl.push(CaliberListPage, { "title":"Caliber","calibers": this.calibers, "caliber": this.item.caliber, "callback": myCallbackFunction });
  }

}

export class item {
  public label: string;
  public barcode:string;
  public sku: string;
  public serial: string;
  public manufacturer: string;
  public model: string;
  public type: string;
  public caliber: string;
  public classsIII: boolean;
  public candr: boolean;
  public condition: string;
  public note: string;

}
