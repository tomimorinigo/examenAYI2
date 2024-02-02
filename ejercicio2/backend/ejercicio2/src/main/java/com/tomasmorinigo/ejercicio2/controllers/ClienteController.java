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

import com.tomasmorinigo.ejercicio2.persistence.entities.Cliente;
import com.tomasmorinigo.ejercicio2.services.cliente.ClienteService;

@RestController
@RequestMapping("/api/clientes")
public class ClienteController {
    
    @Autowired
    private ClienteService clienteService;

    @GetMapping("/all")
    public ArrayList<Cliente> getAllClientes() {
        return clienteService.getAllClientes();
    }

    @PostMapping("/save")
    public void saveCliente(@RequestBody Cliente cliente) {
        clienteService.saveCliente(cliente);
    }

    @PutMapping("/update")
    public void updateCliente(@RequestBody Cliente cliente) {
        clienteService.saveCliente(cliente);
    }

    @DeleteMapping("/delete/{id}")
    public void deleteCliente(@PathVariable Integer id) {
        clienteService.deleteCliente(id);
    }

}
