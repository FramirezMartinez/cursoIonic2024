import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-model-detalle-user',
  templateUrl: './model-detalle-user.component.html',
  styleUrls: ['./model-detalle-user.component.scss'],
})
export class ModelDetalleUserComponent  implements OnInit {
//vareable de tipo entrada 
@Input() usuario: any;
   

constructor(private modalCtrl: ModalController) { }

ngOnInit() {
  console.log(this.usuario);
}

cerrarModal()
{
 this.modalCtrl.dismiss();
}

}
