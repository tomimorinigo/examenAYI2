package com.tomasmorinigo.ejercicio1.services.usuario;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.tomasmorinigo.ejercicio1.persistence.entities.Usuario;
import com.tomasmorinigo.ejercicio1.persistence.repositories.UsuarioRepository;

@Service
public class UserDetailsServiceImp implements UserDetailsService{
    
    @Autowired
    private UsuarioRepository usuarioRepository;

    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException{
        Usuario usuario = usuarioRepository.findByNombreUsuario(username);

        if (usuario == null) {
            throw new UsernameNotFoundException(username);
        }

        return User
            .withUsername(username)
            .password(usuario.getPasswordUsuario())
            .authorities("USER")
            .build();
    }

}
