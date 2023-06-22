import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-shopping-item',
  templateUrl: './edit-shopping-item.component.html',
  styleUrls: ['./edit-shopping-item.component.scss'],
})
export class EditShoppingItemComponent  implements OnInit {

  id:  string = '';
  itemName: string = '';
  itemNumber: number = 0;

  constructor() { }

  ngOnInit() {}

}
