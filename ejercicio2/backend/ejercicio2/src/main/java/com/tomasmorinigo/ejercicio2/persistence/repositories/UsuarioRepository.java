package com.tomasmorinigo.ejercicio2.persistence.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tomasmorinigo.ejercicio2.persistence.entities.Usuario;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer>{
    public Usuario findByNombreUsuario(String nombreUsuario);
}
