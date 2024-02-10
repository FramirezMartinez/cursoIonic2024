import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ModalController } from '@ionic/angular';
import { ModalDetalleCategoriaComponent } from '../components/modal-detalle-categoria/modal-detalle-categoria.component';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  listaCategorias: any[] = [];

  ngOnInit(): void {
      this.obtenerCategorias();
  }

  constructor (private _producosService: ProductosService,private modalCtrl: ModalController) { }


  obtenerCategorias(){
    this._producosService.obtenerCaegorias().subscribe({
      next: (value) => {
        this.listaCategorias = value;
        // console.log(value);
      },
      error: (err) => {
        console.log(err)
      }, 
      complete: ()=>{
        
      }
    });
  }
  async abrirmodalDetalle(item: any)
  {
    const modal = await this.modalCtrl.create({
      component: ModalDetalleCategoriaComponent,
      componentProps:
      {
        categoria:item
      }
    });
    modal.present();
  }


  compartirCategoria(item:any)
  {
    Share.share({
      title: item.name,
      text: item.id,
      url: item.image,
      
    });
  }

}
