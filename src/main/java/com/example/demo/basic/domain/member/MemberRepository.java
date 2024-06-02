//package com.example.demo.basic.domain.member;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
//import org.springframework.data.repository.query.Param;
//import org.springframework.stereotype.Repository;
//
//import java.util.List;
//import java.util.Optional;
//
//public interface MemberRepository extends CrudRepository<Member, String> {
//
//
//    Member save(Member member);
//    @Query("SELECT m FROM Member m WHERE m.id = :id")
//    Optional<Member> findById(@Param("id") String id);
//
//    @Query("SELECT m FROM Member m WHERE m.pwd = :pwd")
//    Optional<Member> findByPwd(@Param("password") String pwd);
//    List<Member> findAll();
//}
