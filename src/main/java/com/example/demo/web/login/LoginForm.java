package com.example.demo.web.login;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

    @Data
    public class LoginForm {

        @NotBlank
        private String loginId;

        @NotBlank
        private String password;
    }

