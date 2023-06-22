import { Component, OnInit } from '@angular/core';
import { ShoppingItem } from 'src/app/model/shopping-item';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent  implements OnInit {

  shoppingList : ShoppingItem[] = [];
  shoppingItem: ShoppingItem = {
    id: '',
    itemName: '',
    itemNumber: 0,
  }

  id:  string = '';
  itemName: string = '';
  itemNumber: number = 0;

  constructor(private auth: AuthService, private data: DataService) { }

  ngOnInit() {
    this.getAllItem();
  }

  register() {
    this.auth.logout();
  }

  getAllItem(){
    this.data.getAllShoppingItems().subscribe(res => {
      this.shoppingList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      })
    }, err => {
      alert('Error while fetching the student data.');
    })
  }

  resetForm(){
    this.id = '';
    this.itemName = '';
    this.itemNumber = 0;
  }

  addItem(){

    if(this.itemName == '' || this.itemNumber == 0){
      alert('You must supply all field to complete.');
      return;
    }

    this.shoppingItem.id = '';
    this.shoppingItem.itemName= this.itemName;
    this.shoppingItem.itemNumber = this.itemNumber;

    this.data.addShoppingItem(this.shoppingItem);

    this.resetForm();

  }

  updateItem(item:ShoppingItem){
    this.data.updateShoppingItem(item);
  }

  deleteItem(item:ShoppingItem){
    if (window.confirm('Are you sure you want to delete '+item.itemName+' '+item.itemNumber+' ?')){
      this.data.deleteShoppingItem(item);
    }
  }

}
