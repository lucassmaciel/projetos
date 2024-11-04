package br.com.lucasmaciel.todolist.user;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;


/**
 * modificadores:
 * public
 * private
 * protected
 */
@RestController
@RequestMapping("/users")
public class UserController {
    /**
     * string(texto)
     * int(inteiro)
     * date(data)
     * float(decimal)
     * char(caractere)
     * void(vazio)
     */
    @PostMapping("/")
     public void create(@RequestBody UserModel UserModel){
            System.out.println(UserModel.getUsername());
            System.out.println(UserModel.getName());
            System.out.println(UserModel.getPassword());
     }
}
