package com.tomasmorinigo.ejercicio2.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tomasmorinigo.ejercicio2.persistence.entities.Producto;

public interface ProductoRepository extends JpaRepository<Producto, Integer>{

}
