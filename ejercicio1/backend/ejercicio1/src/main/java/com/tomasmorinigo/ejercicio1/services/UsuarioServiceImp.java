package com.tomasmorinigo.ejercicio1.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.tomasmorinigo.ejercicio1.persistence.entities.Usuario;
import com.tomasmorinigo.ejercicio1.persistence.repositories.UsuarioRepository;

@Service
public class UsuarioServiceImp implements UsuarioService{
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    @Override
    @Transactional
    public boolean login(String nombreUsuario, String passwordUsuario) {
        Usuario usuario = usuarioRepository.findByNombreUsuario(nombreUsuario);
        
        if (usuario != null) {
            return usuario.getPasswordUsuario().equals(passwordUsuario);
        } else {
            return false;
        }
    }

}
