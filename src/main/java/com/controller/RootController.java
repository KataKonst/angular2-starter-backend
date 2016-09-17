package com.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class RootController {

	// This is in conjuction with the following configuration:

	// in index.html: baseref = /app/
	// in main.ts: APP_BASE_HREF = /app/root (configuration for routing)
	@RequestMapping("/app/root/**")
	public String init() {
		return "/app/index.html";
	}

	@RequestMapping("/login.html")
	public  String login() { return "/app/login.html";

	}

}
   