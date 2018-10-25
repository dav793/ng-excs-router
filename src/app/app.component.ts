import { Component } from '@angular/core';

/**
 *
 *  - Como puedo mostrar cada uno de los componentes en su ruta correspondiente?
 *  - Como puedo permitir la navegacion por las rutas mediante el uso del nav?
 *  - Como puedo navegar a la ruta de un item al hacerle click en el ShopComponent?
 *  - Como puedo proveer el ID del item al ItemComponent mediante la ruta?
 *  - Como puedo prohibir la activacion de la ruta de CartComponent si el usuario no esta logged in?
 *  - Como puedo prohibir la desactivacion de la ruta de CartComponent si el carrito no esta vacio?
 *  - Como puedo proveer multiples variables mediante una ruta, sin importar su orden u ausencia? (query strings)
 *
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
