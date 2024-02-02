package com.tomasmorinigo.ejercicio2.services.producto;

import java.util.ArrayList;

import com.tomasmorinigo.ejercicio2.persistence.entities.Producto;

public interface ProductoService {
    public ArrayList<Producto> getAllProductos();
    public void saveProducto(Producto producto);
    public void deleteProducto(Integer idProducto);
}
