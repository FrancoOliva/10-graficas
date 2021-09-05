import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Nos permite tomar la respuesta de un observable y retornar lo que necesitemos
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient ) { }

  getUsuariosRedesSociales(){
    return this.http.get('http://localhost:3000/grafica');
  }

  getUsuariosRedesSocialesDonaData(){

    return this.getUsuariosRedesSociales().pipe(
      delay(1500),
      map( data => {

        const labels = Object.keys( data ); // obtenemos solo las llaves
        const values = Object.values( data ); // obtenemos solo los valores

        // retornamos un nuevo objeto donde tenemos las keys y los values como queremos
        return { labels, values };
      })
    );
  }
}
