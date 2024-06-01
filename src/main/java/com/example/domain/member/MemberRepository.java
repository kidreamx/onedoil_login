package com.example.domain.member;

import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

@Slf4j
@Repository
public class MemberRepository {
    private static Map<Long, Member> store = new ConcurrentHashMap<>();
    private static long sequence = 0L;

    public Member save(Member member){

        member.setUid(++sequence);
        log.info("save: member = {}", member);
        store.put(member.getUid(), member);

        return member;
    }
    public Member findById(Long id){
        return store.get(id);
    }
    public Optional<Member> findByLoginId(String loginId){
        return this.findAll().stream()
                .filter(m -> m.getId().equals(loginId))
                .findFirst();
    }
    public List<Member> findAll() {
        return new ArrayList<>(store.values());
    }

    public void clearStore() {
        store.clear();
    }

    @PostConstruct
    public void init() {

        Member member = new Member();
        member.setId("test");
        member.setPwd("test!");
        member.setName("테스터");

        save(member);
    }
}
