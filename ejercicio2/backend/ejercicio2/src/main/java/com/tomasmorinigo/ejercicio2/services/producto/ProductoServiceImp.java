package com.tomasmorinigo.ejercicio2.services.producto;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tomasmorinigo.ejercicio2.persistence.entities.Producto;
import com.tomasmorinigo.ejercicio2.persistence.repositories.ProductoRepository;

@Service
public class ProductoServiceImp implements ProductoService{

    @Autowired
    private ProductoRepository productoRepository;

    @Override
    @Transactional(readOnly = true)
    public ArrayList<Producto> getAllProductos() {
        return (ArrayList<Producto>) productoRepository.findAll();
    }

    @Override
    @Transactional
    public void saveProducto(Producto producto) {
        productoRepository.save(producto);
    }

    @Override
    @Transactional
    public void deleteProducto(Integer idProducto) {
        productoRepository.deleteById(idProducto);
    }
}
