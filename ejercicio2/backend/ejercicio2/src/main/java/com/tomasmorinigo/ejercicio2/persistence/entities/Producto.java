package com.tomasmorinigo.ejercicio2.persistence.entities;

import java.io.Serializable;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "productos")
public class Producto implements Serializable{
    
    private static final long serialVersionUID = 1L;

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idProducto;
    private String codigoEan;
    private String nombreProducto;
    private String descripcionProducto;
    private String tipo;
    private String marca;
    private Float precio;
    private Integer stock;

}
