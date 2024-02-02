package com.tomasmorinigo.ejercicio2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.tomasmorinigo.ejercicio2.persistence.entities.Usuario;
import com.tomasmorinigo.ejercicio2.services.usuario.UsuarioService;

@RestController
public class UsuarioController {

    @Autowired
    private UsuarioService usuarioService;

    @PostMapping("/auth/login")
    public ResponseEntity<String> login(@RequestBody Usuario usuario){
        boolean response = usuarioService.login(usuario.getNombreUsuario(), usuario.getPasswordUsuario());
        
        if (response) {
            return ResponseEntity.ok("Inicio de sesion exitoso");
        } else{
            return ResponseEntity.status(401).body("Credenciales incorrectas");
        }
    }

}
