import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {

  private form = [
    {val: 'Gato', isChecked: false},
    {val: 'Cachorro', isChecked: false},
    {val: 'Coelho', isChecked: false},
    {val: 'Hamster', isChecked: false},
    {val: 'Papagaio', isChecked: false}

  ]

  constructor() { }

  ngOnInit() {
  }

  _getSelectedItem(selectedItem){
    console.log(selectedItem)
  }

}
