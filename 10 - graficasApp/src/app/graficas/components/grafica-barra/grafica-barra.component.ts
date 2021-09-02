import { Component, Input, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica-barra',
  templateUrl: './grafica-barra.component.html',
  styles: [
  ]
})
export class GraficaBarraComponent implements OnInit {

  @Input() horizontal: boolean = false;

  @Input() barChartLabels: Label[] = [
    //'2006', '2007', '2008', '2009', '2010', '2011', '2012'
  ];

  @Input() barChartData: ChartDataSets[] = [
    //{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A', backgroundColor: '#FACC07', hoverBackgroundColor: 'red' },
    //{ data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B', backgroundColor: '#72F702', hoverBackgroundColor: 'red' }
  ];


  public barChartOptions: ChartOptions = {
    responsive: true
    
  };  

  // Esto queda igual porque no va a ser personalizable desde afuera
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;

  constructor() { }

  ngOnInit(): void {

    if( this.horizontal ){

      this.barChartType = 'horizontalBar';
    }
  }

  

}
