package com.tomasmorinigo.ejercicio1.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tomasmorinigo.ejercicio1.persistence.entities.Empleado;

public interface EmpleadoRepository extends JpaRepository<Empleado, Integer>{
    
}
