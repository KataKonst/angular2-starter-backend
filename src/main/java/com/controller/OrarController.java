package com.controller;

import com.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.web.HttpMessageConverters;
import org.springframework.context.annotation.Bean;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.repositories.UserRepository;
import org.springframework.web.servlet.mvc.method.annotation.AbstractJsonpResponseBodyAdvice;

import java.util.Collections;

/**
 * Created by katakonst on 9/17/16.
 */
@Controller
public class OrarController {


    @RequestMapping("/create")
    @ResponseBody
    public User create(String email, String name,String password) {
        String userId = "";
        try {
            User user = new User(email, name);
            user.setPassword(password);
            userDao.save(user);
            userId = String.valueOf(user.getId());
            return  user;
        }
        catch (Exception ex) {
            ex.printStackTrace();
            return null;
        }
    }
    @Autowired
    private UserRepository userDao;


}
