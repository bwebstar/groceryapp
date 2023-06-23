import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore'
import { ShoppingItem } from '../model/shopping-item';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore) { }

  addShoppingItem(shoppingItem:ShoppingItem){
  shoppingItem.id = this.afs.createId();
  return this.afs.collection('/ShoppingItem').add(shoppingItem);
  }

  getAllShoppingItems(){
    return this.afs.collection('/ShoppingItem').snapshotChanges();
    }

  deleteShoppingItem(shoppingItem:ShoppingItem){
    return this.afs.doc('/ShoppingItem/'+shoppingItem.id).delete();
    }

  updateShoppingItem(shoppingItem:ShoppingItem){
    this.deleteShoppingItem(shoppingItem);
    this.addShoppingItem(shoppingItem);
    }
}
