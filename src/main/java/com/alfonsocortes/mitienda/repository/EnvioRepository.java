package com.alfonsocortes.mitienda.repository;

import com.alfonsocortes.mitienda.domain.Envio;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Envio entity.
 */
@SuppressWarnings("unused")
@Repository
public interface EnvioRepository extends JpaRepository<Envio, Long> {
}
