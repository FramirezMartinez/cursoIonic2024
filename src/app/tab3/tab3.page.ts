import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { ModelDetalleUserComponent } from '../component2/model-detalle-user/model-detalle-user.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  listaUsuarios: any[] = [];

  ngOnInit(): void {
      this.obtenerUsuarios();
  }
  constructor (private _producosService: ProductosService,private modalCtrl: ModalController) { }
  obtenerUsuarios(){
    this._producosService.obtenerUsuarios().subscribe({
      next: (value) => {
        this.listaUsuarios = value;
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
      component: ModelDetalleUserComponent,
      componentProps:
      {
        usuario:item
      }
    });
    modal.present();
  }
}
