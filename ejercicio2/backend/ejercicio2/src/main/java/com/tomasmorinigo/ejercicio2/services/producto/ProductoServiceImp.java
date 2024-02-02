package com.tomasmorinigo.ejercicio2.services.producto;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tomasmorinigo.ejercicio2.persistence.entities.Producto;
import com.tomasmorinigo.ejercicio2.persistence.repositories.ProductoRepository;

@Service
public class ProductoServiceImp implements ProductoService{

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    public ArrayList<Producto> getAllProductos() {
        return (ArrayList<Producto>) productoRepository.findAll();
    }

    @Override
    public void saveProducto(Producto producto) {
        productoRepository.save(producto);
    }

    @Override
    public void deleteProducto(Integer idProducto) {
        productoRepository.deleteById(idProducto);
    }
    
}
