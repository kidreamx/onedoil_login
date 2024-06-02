package com.example.demo.basic.domain.member;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;
import lombok.Generated;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Member {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String id;
    private String pwd;
    private Long uid;
    public Member(){

    }

    public Member( String id, String pwd) {
        this.id = id;
        this.pwd = pwd;
    }
}
