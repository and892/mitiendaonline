package com.alfonsocortes.mitienda.repository;

import com.alfonsocortes.mitienda.domain.ProductoPedido;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the ProductoPedido entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ProductoPedidoRepository extends JpaRepository<ProductoPedido, Long> {
}
