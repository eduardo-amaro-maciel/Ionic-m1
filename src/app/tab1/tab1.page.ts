import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  isModalOpen = false;
  message = 'Reconsidera o desconto de pontos ai ksk 💛'

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
    this.message = this.message;
  }

  constructor() {}

}
