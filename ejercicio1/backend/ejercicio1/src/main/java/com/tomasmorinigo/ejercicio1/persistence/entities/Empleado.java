package com.tomasmorinigo.ejercicio1.persistence.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "empleados")
public class Empleado implements Serializable{
    
    private static final long serialVersionUID = 1L;

    @Id
    private Integer legajo;
    private String nombreEmpleado;
    private String apellidoEmpleado;
    private String cargo;
    private String sucursal;
    private Integer antiguedadAnios;


}
