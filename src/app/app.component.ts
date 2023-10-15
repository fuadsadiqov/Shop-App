import { Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite'

interface Item {
  name: string,
};

@Component({
  selector: 'root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    initFlowbite();
  }
}
