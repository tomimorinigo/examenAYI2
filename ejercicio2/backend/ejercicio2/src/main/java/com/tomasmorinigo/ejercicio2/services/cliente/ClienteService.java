package com.tomasmorinigo.ejercicio2.services.cliente;

import java.util.ArrayList;

import com.tomasmorinigo.ejercicio2.persistence.entities.Cliente;

public interface ClienteService {
    public ArrayList<Cliente> getAllClientes();
    public void saveCliente(Cliente cliente);
    public void deleteCliente(Integer idCliente);
}
