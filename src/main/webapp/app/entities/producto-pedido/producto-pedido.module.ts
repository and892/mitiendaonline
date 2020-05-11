import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MitiendaonlineSharedModule } from 'app/shared/shared.module';
import { ProductoPedidoComponent } from './producto-pedido.component';
import { ProductoPedidoDetailComponent } from './producto-pedido-detail.component';
import { ProductoPedidoUpdateComponent } from './producto-pedido-update.component';
import { ProductoPedidoDeleteDialogComponent } from './producto-pedido-delete-dialog.component';
import { productoPedidoRoute } from './producto-pedido.route';

@NgModule({
  imports: [MitiendaonlineSharedModule, RouterModule.forChild(productoPedidoRoute)],
  declarations: [
    ProductoPedidoComponent,
    ProductoPedidoDetailComponent,
    ProductoPedidoUpdateComponent,
    ProductoPedidoDeleteDialogComponent
  ],
  entryComponents: [ProductoPedidoDeleteDialogComponent]
})
export class MitiendaonlineProductoPedidoModule {}
