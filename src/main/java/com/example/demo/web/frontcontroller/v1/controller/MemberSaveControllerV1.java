package com.example.demo.web.frontcontroller.v1.controller;

import com.example.demo.basic.domain.member.Member;
import com.example.demo.basic.domain.member.MemoryMemberRepository;
import com.example.demo.basic.domain.member.MemoryMemberRepository;
import com.example.demo.web.frontcontroller.v1.ControllerV1;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;


import java.io.IOException;


public class MemberSaveControllerV1 implements ControllerV1 {
    private MemoryMemberRepository memoryMemberRepository = MemoryMemberRepository.getInstance();
    @Override
    public void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("Id");
        String password =request.getParameter("Pwd");
        System.out.println(id+" "+password);
        Member member = new Member(id, password);
        memoryMemberRepository.save(member);

        //Model에 데이터를 보관한다.
        request.setAttribute("member",member);

        String viewPath = "/WEB-INF/views/login/loginForm.jsp";
        RequestDispatcher dispatcher = request.getRequestDispatcher(viewPath);
        dispatcher.forward(request,response);
    }
}
