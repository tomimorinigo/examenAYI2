package com.tomasmorinigo.ejercicio2.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tomasmorinigo.ejercicio2.persistence.entities.Cliente;

public interface ClienteRepository extends JpaRepository<Cliente, Integer>{
    
}
