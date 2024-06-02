//package com.example.demo.basic.domain.repository;
//
//import com.example.demo.basic.domain.member.Member;
//import com.example.demo.basic.domain.member.MemberRepository;
//import jakarta.persistence.EntityManager;
//import jakarta.persistence.PersistenceContext;
//import lombok.Getter;
//import org.springframework.jdbc.datasource.DataSourceUtils;
//import org.springframework.stereotype.Repository;
//
//import javax.sql.DataSource;
//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.util.List;
//import java.util.Optional;
//import java.sql.*;
//
//@Getter
//public class JpaMemberRepository implements MemberRepository {
//
//
//    @PersistenceContext
//    private static EntityManager em;
//    public static final JpaMemberRepository instance = new JpaMemberRepository(em);
//    public JpaMemberRepository(EntityManager em) {
//        JpaMemberRepository.em = em;
//    }
//
//
//    @Override
//    public Member save(Member member){
//            em.persist(member);
//            return member;
//    }
//
//    @Override
//    public <S extends Member> Iterable<S> saveAll(Iterable<S> entities) {
//        return null;
//    }
//
//    @Override
//    public Optional<Member> findById(String id){
//        Member member = em.find(Member.class, id);
//        return Optional.ofNullable(member);
//
//    }
//
//    @Override
//    public boolean existsById(String s) {
//        return false;
//    }
//
//    @Override
//    public Optional<Member> findByPwd(String pwd){
//        List<Member> result = em.createQuery("select m from Member m where m.pwd = :pwd", Member.class)
//                .setParameter("pwd", pwd)
//                .getResultList();
//        return result.stream().findAny();
//    }
//
//    @Override
//    public List<Member> findAll(){
//        return em.createQuery("select m from Member m", Member.class).getResultList();
//    }
//
//    @Override
//    public Iterable<Member> findAllById(Iterable<String> strings) {
//        return null;
//    }
//
//    @Override
//    public long count() {
//        return 0;
//    }
//
//    @Override
//    public void deleteById(String s) {
//
//    }
//
//    @Override
//    public void delete(Member entity) {
//
//    }
//
//    @Override
//    public void deleteAllById(Iterable<? extends String> strings) {
//
//    }
//
//    @Override
//    public void deleteAll(Iterable<? extends Member> entities) {
//
//    }
//
//    @Override
//    public void deleteAll() {
//
//    }
//
//}
