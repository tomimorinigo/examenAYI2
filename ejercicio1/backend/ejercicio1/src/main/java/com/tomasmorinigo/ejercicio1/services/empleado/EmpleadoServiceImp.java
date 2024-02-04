package com.tomasmorinigo.ejercicio1.services.empleado;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tomasmorinigo.ejercicio1.persistence.entities.Empleado;
import com.tomasmorinigo.ejercicio1.persistence.repositories.EmpleadoRepository;

@Service
public class EmpleadoServiceImp implements EmpleadoService{
    
    @Autowired
    private EmpleadoRepository empleadoRepository;

    @Override
    @Transactional(readOnly = true)
    public ArrayList<Empleado> getAllEmpleados(){
        return (ArrayList<Empleado>) empleadoRepository.findAll();
    }

    @Override
    @Transactional
    public void saveEmpleado(Empleado empleado) {
        empleadoRepository.save(empleado);
    }

    @Override
    @Transactional
    public void deleteEmpleadoByLegajo(Integer legajo) {
        empleadoRepository.deleteById(legajo);
    }

    @Override
    @Transactional(readOnly = true)
    public boolean existsEmpleadoByLegajo(Integer nuevoLegajo) {
        return empleadoRepository.existsById(nuevoLegajo);
    }
    

}
