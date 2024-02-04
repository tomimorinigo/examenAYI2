package com.tomasmorinigo.ejercicio2.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tomasmorinigo.ejercicio2.JWT.model.TokenInfo;
import com.tomasmorinigo.ejercicio2.JWT.service.JwtUtilService;
import com.tomasmorinigo.ejercicio2.persistence.entities.Usuario;

@RestController
@RequestMapping("/auth")
public class UsuarioController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserDetailsService userDetailsService;

    @Autowired
    private JwtUtilService jwtUtilService;

    @PostMapping("/login")
    public ResponseEntity<TokenInfo> authenticate(@RequestBody Usuario usuario){
        
        authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(usuario.getNombreUsuario(), 
            usuario.getPasswordUsuario())
        );

        final UserDetails userDetails = userDetailsService
            .loadUserByUsername(usuario.getNombreUsuario());

        final String jwt = jwtUtilService.generateToken(userDetails);

        return ResponseEntity.ok(new TokenInfo(jwt));
    }

}
