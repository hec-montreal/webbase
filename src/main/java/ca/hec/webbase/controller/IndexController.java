package ca.hec.webbase.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController
{
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView getIndex()
	{
		return new ModelAndView("index.jsp");
	}

	@RequestMapping(value = "/hello", method = RequestMethod.GET)
	public @ResponseBody String getHello()
	{
		return "Hello";
	}
}
