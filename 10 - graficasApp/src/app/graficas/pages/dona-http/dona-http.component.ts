import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    //'Download Sales', 'In-Store Sales', 'Mail-Order Sales', 'Others'
  ];
  public doughnutChartData: MultiDataSet = [
    //[350, 450, 100, 50]
  ];

  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#FA250A', '#E0420F', '#FA6100', '#F007AF', '#ACF75C'
      ]
    }
  ];  

  constructor( private graficasServices: GraficasService ) { }

  ngOnInit(): void {

    this.graficasServices.getUsuariosRedesSociales().subscribe( data => {
      // console.log(data);

      const labels = Object.keys( data ); // obtenemos solo las llaves
      const values = Object.values( data ); // obtenemos solo los valores

      this.doughnutChartLabels = labels;
      this.doughnutChartData.push( values );
    });
  }

}
