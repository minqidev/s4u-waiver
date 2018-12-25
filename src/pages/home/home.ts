import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController } from 'ionic-angular';

=======
import { NavController, ModalController } from 'ionic-angular';
import { NewFirearmsPage } from '../new-firearms/new-firearms';
import { HttpClient} from '@angular/common/http';
>>>>>>> 31de3156d6bf04aa0e35a8b3ec6a88ae92809c2d
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
<<<<<<< HEAD

  constructor(public navCtrl: NavController) {

=======
  
  constructor(public navCtrl: NavController, public modal:ModalController, public httpClient:HttpClient) {
    
  }

  async addNewFirearms(){
    let modal = this.modal.create(NewFirearmsPage);
    modal.onDidDismiss((data,role)=>{

    });
    await modal.present();
>>>>>>> 31de3156d6bf04aa0e35a8b3ec6a88ae92809c2d
  }

}
