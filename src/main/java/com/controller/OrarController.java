package com.controller;

import com.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import com.repositories.UserRepository;

/**
 * Created by katakonst on 9/17/16.
 */
@Controller
public class OrarController {


    /**
     * GET /create  --> Create a new user and save it in the database.
     */

    @RequestMapping("/create")
    @ResponseBody
    public String create(String email, String name) {
        String userId = "";
        try {
            User user = new User(email, name);
            userDao.save(user);
            userId = String.valueOf(user.getId());
        }
        catch (Exception ex) {
            return "Error creating the user: " + ex.toString();
        }
        return "User succesfully created with id = " + userId;
    }
    @Autowired
    private UserRepository userDao;


}
