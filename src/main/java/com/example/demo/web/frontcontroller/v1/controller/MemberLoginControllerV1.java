package com.example.demo.web.frontcontroller.v1.controller;

import com.example.demo.basic.domain.member.Member;
import com.example.demo.basic.domain.member.MemoryMemberRepository;
import com.example.demo.web.frontcontroller.v1.ControllerV1;
import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.bind.annotation.PostMapping;

import java.io.IOException;

public class MemberLoginControllerV1 implements ControllerV1 {


    private MemoryMemberRepository memoryMemberRepository = MemoryMemberRepository.getInstance();

    @Override
    public void process(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String id = request.getParameter("id");
        String password =request.getParameter("password");

        Member loginMember = memoryMemberRepository.login(id,password);

        if(loginMember==null){  // 로그인 실패 했을때
            String viewPath = "/WEB-INF/views/login/loginForm.jsp";
            RequestDispatcher dispatcher = request.getRequestDispatcher(viewPath);
            dispatcher.forward(request, response);
        }
        else {                                         // 로그인 성공 했을떄
            String viewPath = "/index.jsp";
            Cookie cookie1 = new Cookie("id", id);
            cookie1.setMaxAge(60); // 쿠키 유효기간 설정
            cookie1.setPath("/");  // 쿠키 경로 설정 (웹 애플리케이션 전체에 유효)
            response.addCookie(cookie1);



            // 리다이렉트
            response.sendRedirect(request.getContextPath() + "/index.jsp");

        }
    }
}
