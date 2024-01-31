package com.tomasmorinigo.ejercicio1.services;

import java.util.ArrayList;

import com.tomasmorinigo.ejercicio1.persistence.entities.Empleado;

public interface EmpleadoService {
    public ArrayList<Empleado> getAllEmpleados();
    public void saveEmpleado(Empleado empleado);
    public void deleteEmpleadoByLegajo(Integer legajo);
    public boolean existsEmpleadoByLegajo(Integer legajo);
}
