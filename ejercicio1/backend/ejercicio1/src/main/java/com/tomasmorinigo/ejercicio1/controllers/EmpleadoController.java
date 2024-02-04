package com.tomasmorinigo.ejercicio1.controllers;

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

import com.tomasmorinigo.ejercicio1.persistence.entities.Empleado;
import com.tomasmorinigo.ejercicio1.services.empleado.EmpleadoService;

@RestController
@RequestMapping("/api/empleados")
public class EmpleadoController {
    
    @Autowired
    private EmpleadoService empleadoService;

    @GetMapping("/all")
    public ArrayList<Empleado> getEmpleados(){
        return empleadoService.getAllEmpleados();
    }

    @GetMapping("/legajo-exists/{legajo}")
    public boolean existsEmpleadoByLegajo(@PathVariable Integer legajo){
        return empleadoService.existsEmpleadoByLegajo(legajo);
    }

    @PostMapping("/save")
    public void saveEmpleado(@RequestBody Empleado empleado){
        empleadoService.saveEmpleado(empleado);
    }

    @PutMapping("/update")
    public void updateEmpleado(@RequestBody Empleado empleado){
        empleadoService.saveEmpleado(empleado);
    }

    @DeleteMapping("/delete/{legajo}")
    public void deleteEmpleado(@PathVariable Integer legajo){
        empleadoService.deleteEmpleadoByLegajo(legajo);
    }
}
