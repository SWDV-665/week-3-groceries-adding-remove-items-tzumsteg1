import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  title = "Grocery List";

  items = [
    {
      name: "Milk",
      quantity: 2
    },
    {
      name: "Bread",
      quantity: 1
    },
    {
      name: "Banana",
      quantity: 6
    },
    {
      name: "Eggs",
      quantity: 1
    }
  ];

  constructor() {

  }
  removeItem(item){
    console.log("Removing Item -", item)
    const toast = this.toastCtrl.create({
      message = 'Removing Item - ' + item.name + "...",
      duration: 3000
    })
    toast.present();
  }
}
