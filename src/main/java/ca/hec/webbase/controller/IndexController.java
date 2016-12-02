package ca.hec.webbase.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class IndexController
{
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public @ResponseBody String getIndex()
	{
		return "Hello, world!";
	}
}
