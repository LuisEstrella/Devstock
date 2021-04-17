import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  search: string = "search-hide";
  pool: string = "first";
  register: string = "hide";
  constructor() { }

  ngOnInit(): void {
  }
  pageActual: number =1;
  category=[
    {
      title: "Repuestos",
      description: "Lorem ipsum dolor sit, amet consectetur",
      puntos: "30",
      unidades: "10",
      vTotal: 20000
    },
    {
      title: "Repuestos",
      description: "Lorem ipsum dolor sit, amet consectetur",
      puntos: "30",
      unidades: "10",
      vTotal: 20000
    },
    {
      title: "Repuestos",
      description: "Lorem ipsum dolor sit, amet consectetur",
      puntos: "30",
      unidades: "10",
      vTotal: 20000
    },
    {
      title: "Repuestos",
      description: "Lorem ipsum dolor sit, amet consectetur",
      puntos: "30",
      unidades: "10",
      vTotal: 20000
    },
    {
      title: "Repuestos",
      description: "Lorem ipsum dolor sit, amet consectetur",
      puntos: "30",
      unidades: "10",
      vTotal: 20000
    },
    {
      title: "Repuestos",
      description: "Lorem ipsum dolor sit, amet consectetur",
      puntos: "30",
      unidades: "10",
      vTotal: 20000
    },
    {
      title: "Tornillos",
      description: "Lorem ipsum dolor sit, amet consectetur",
      puntos: "30",
      unidades: "10",
      vTotal: 20000
    },
  ]

}
