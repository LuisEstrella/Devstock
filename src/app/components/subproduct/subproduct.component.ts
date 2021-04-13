import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subproduct',
  templateUrl: './subproduct.component.html',
  styleUrls: ['./subproduct.component.scss']
})
export class SubproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  categories: any = [
    {name: "Repuestos", description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit eos corrupti eaque labore quibusdam aspernatur, distinctio, fugiat amet quia ipsum autem excepturi omnis velit eum ea aut fuga dolorum ratione!", products:"10", units: "20", invetory_value:"20000000"},
  ];

}
