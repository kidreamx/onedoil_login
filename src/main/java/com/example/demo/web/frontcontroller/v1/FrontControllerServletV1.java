package com.example.demo.web.frontcontroller.v1;

import com.example.demo.basic.HelloServlet;
import com.example.demo.web.frontcontroller.v1.controller.*;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

@WebServlet(name = "frontControllerServletV1" , urlPatterns = "/member/*")
public class FrontControllerServletV1 extends HelloServlet {
    private  Map<String, ControllerV1> controllerV1Map = new HashMap<>();

    public FrontControllerServletV1() {
        controllerV1Map.put("/member/new-form", new MemberFormControllerV1());  // 회원가입 페이지 업로드
        controllerV1Map.put("/member/login-conform", new MemberLoginControllerV1());  // 로그인 판별 할때
        controllerV1Map.put("/member/my-page", new MemberUserPageControllerV1()); // 마이페이지
        controllerV1Map.put("/member/save", new MemberSaveControllerV1());  // 회원가입 페이지 간후 값 넘겨받고
        controllerV1Map.put("/member/login", new LoginFormControllerV1());  // 로그인 페이지 열기

    }

    @Override
    protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("FrontControllerServletV1.service");

        String requestURI = request.getRequestURI();
        System.out.println(requestURI);

        ControllerV1 controller = controllerV1Map.get(requestURI);
        if (controller == null) {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            return;
        }

        controller.process(request, response);
    }
}
