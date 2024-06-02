//package com.example.demo.basic.domain.service;
//
//import com.example.demo.basic.domain.member.Member;
//import com.example.demo.basic.domain.member.MemoryMemberRepository;
//import com.example.demo.basic.domain.member.MemoryMemberRepository;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import static org.springframework.data.repository.util.ClassUtils.ifPresent;
//
//
//@Service
//public class MemberService {
//    private final MemberRepository memberRepository;
//
//    @Autowired
//    public MemberService(MemberRepository memberRepository) {
//        this.memberRepository = memberRepository;
//    }
//
//    public String join(Member member){
//        validateDuplicateMember(member);
//        memberRepository.save(member);
//        return member.getId();
//    }
//
//    public void validateDuplicateMember(Member member){
//        memberRepository.findByPwd(member.getId())
//            .ifPresent(m->{
//                throw new IllegalStateException("이미 존재하는 회원입니다. ");
//            });
//
//    }
//}
