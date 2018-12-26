import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { NewFirearmsPage } from '../new-firearms/new-firearms';
import { HttpClient} from '@angular/common/http';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  constructor(public navCtrl: NavController, public modal:ModalController, public httpClient:HttpClient) {
    
  }

  async addNewFirearms(){
    let modal = this.modal.create(NewFirearmsPage);
    modal.onDidDismiss((data,role)=>{

    });
    await modal.present();
  }

}
