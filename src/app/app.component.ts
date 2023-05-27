import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';

interface Item {
  name: string,
};

@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'Shop Application';
  item$: Observable<Item[]>;
  firestore: Firestore = inject(Firestore);

  constructor() {
    const itemCollection = collection(this.firestore, 'items');
    this.item$ = collectionData(collection);
  }
}
