package com.tomasmorinigo.ejercicio2.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tomasmorinigo.ejercicio2.services.producto.ProductoService;
import com.tomasmorinigo.ejercicio2.persistence.entities.Producto;

@RestController
@RequestMapping("/api/productos")
public class ProductoController {
    
    @Autowired
    private ProductoService productoService;

    @GetMapping("/all")
    public ArrayList<Producto> getAllProductos() {
        return productoService.getAllProductos();
    }

    @PostMapping("/save")
    public void saveProducto(@RequestBody Producto producto) {
        productoService.saveProducto(producto);
    }

    @PutMapping("/update")
    public void updateProducto(@RequestBody Producto producto) {
        productoService.saveProducto(producto);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteProducto(@PathVariable Integer id) {
        productoService.deleteProducto(id);
    }

}
