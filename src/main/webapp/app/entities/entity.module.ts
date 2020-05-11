import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'producto',
        loadChildren: () => import('./producto/producto.module').then(m => m.MitiendaonlineProductoModule)
      },
      {
        path: 'producto-categoria',
        loadChildren: () => import('./producto-categoria/producto-categoria.module').then(m => m.MitiendaonlineProductoCategoriaModule)
      },
      {
        path: 'stock',
        loadChildren: () => import('./stock/stock.module').then(m => m.MitiendaonlineStockModule)
      },
      {
        path: 'sucursal',
        loadChildren: () => import('./sucursal/sucursal.module').then(m => m.MitiendaonlineSucursalModule)
      },
      {
        path: 'cliente',
        loadChildren: () => import('./cliente/cliente.module').then(m => m.MitiendaonlineClienteModule)
      },
      {
        path: 'pedido',
        loadChildren: () => import('./pedido/pedido.module').then(m => m.MitiendaonlinePedidoModule)
      },
      {
        path: 'producto-pedido',
        loadChildren: () => import('./producto-pedido/producto-pedido.module').then(m => m.MitiendaonlineProductoPedidoModule)
      },
      {
        path: 'factura',
        loadChildren: () => import('./factura/factura.module').then(m => m.MitiendaonlineFacturaModule)
      },
      {
        path: 'envio',
        loadChildren: () => import('./envio/envio.module').then(m => m.MitiendaonlineEnvioModule)
      }
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ])
  ]
})
export class MitiendaonlineEntityModule {}
