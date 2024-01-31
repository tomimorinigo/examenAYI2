package com.tomasmorinigo.ejercicio1.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tomasmorinigo.ejercicio1.persistence.entities.Empleado;
import com.tomasmorinigo.ejercicio1.services.EmpleadoService;

@RestController
public class EmpleadoController {
    
    @Autowired
    private EmpleadoService empleadoService;

    @GetMapping("/api/empleados")
    public ArrayList<Empleado> getEmpleados(){
        return empleadoService.getAllEmpleados();
    }

    @PostMapping("/api/new-empleado")
    public void saveEmpleado(@RequestBody Empleado empleado){
        empleadoService.saveEmpleado(empleado);
    }

    @PutMapping("/api/update-empleado")
    public void updateEmpleado(@RequestBody Empleado empleado){
        empleadoService.saveEmpleado(empleado);
    }

    @GetMapping("/api/legajo-exists/{legajo}")
    public boolean existsEmpleadoByLegajo(@PathVariable Integer legajo){
        return empleadoService.existsEmpleadoByLegajo(legajo);
    }

    @DeleteMapping("/api/delete-empleado/{legajo}")
    public void deleteEmpleado(@PathVariable Integer legajo){
        empleadoService.deleteEmpleadoByLegajo(legajo);
    }
}
