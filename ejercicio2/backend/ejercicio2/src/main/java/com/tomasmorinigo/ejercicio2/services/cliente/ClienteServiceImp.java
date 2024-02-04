package com.tomasmorinigo.ejercicio2.services.cliente;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tomasmorinigo.ejercicio2.persistence.entities.Cliente;
import com.tomasmorinigo.ejercicio2.persistence.repositories.ClienteRepository;

@Service
public class ClienteServiceImp implements ClienteService{

    @Autowired
    private ClienteRepository clienteRepository;

    @Override
    @Transactional(readOnly = true)
    public ArrayList<Cliente> getAllClientes() {
        return (ArrayList<Cliente>) clienteRepository.findAll();
    }

    @Override
    @Transactional
    public void saveCliente(Cliente cliente) {
        clienteRepository.save(cliente);
    }

    @Override
    @Transactional
    public void deleteCliente(Integer idCliente) {
        clienteRepository.deleteById(idCliente);
    }
    
}
