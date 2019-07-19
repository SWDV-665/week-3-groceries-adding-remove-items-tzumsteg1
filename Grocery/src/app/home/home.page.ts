import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { NavController, ToastController } from '@ionic/angular';

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

  constructor(public toastCtrl: ToastController, public alertCtrl: AlertController) {

  }
  removeItem(item){
    console.log("Removing Item -", item)
    const toast = this.toastCtrl.create({
      message = 'Removing Item - ' + item.name + "...",
      duration: 3000
    })
    toast.present();
  }

  addItem(){
    console.log("Adding Item");

  }
  showAddItemPrompt(){
    const promp = this.alertCtrl.creat({
      title: "Add Item",
      message: "Please enter your item.",
      inputs: [
        {
        name: 'name',
        placeholder: 'Name'
        },
        {
          name: 'quantity',
          placeholder: 'Quantity'
          },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: item=> {
            console.log('Saved clicked', item);
            this.items.push(item);
          }
        }
      ]
    });
    prompt.present();
  }
}
