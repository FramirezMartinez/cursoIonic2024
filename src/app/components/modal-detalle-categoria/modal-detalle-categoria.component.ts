import { Component, Input, OnInit, input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-detalle-categoria',
  templateUrl: './modal-detalle-categoria.component.html',
  styleUrls: ['./modal-detalle-categoria.component.scss'],
})
export class ModalDetalleCategoriaComponent  implements OnInit {
  //vareable de tipo entrada 
  @Input() categoria: any;
   

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
    console.log(this.categoria);
  }

  cerrarModal()
  {
   this.modalCtrl.dismiss();
  }
}
