package com.example.demo.web.frontcontroller.v1.controller;

import com.example.demo.basic.domain.member.Member;
import com.example.demo.web.frontcontroller.v1.ControllerV1;
import com.example.demo.basic.domain.member.MemoryMemberRepository;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

public class MemberUserPageControllerV1 implements ControllerV1 {

    private MemoryMemberRepository memoryMemberRepository = MemoryMemberRepository.getInstance();


    @Override
    public void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        List<Member> members = memoryMemberRepository.findAll();
        String id = request.getParameter("id");
        request.setAttribute("members",id);
        String viewPath = "/WEB-INF/views/login/mypage.jsp";
        RequestDispatcher dispatcher = request.getRequestDispatcher(viewPath);
        dispatcher.forward(request,response);
    }
}
