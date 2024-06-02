package com.example.demo.basic.domain.member;

import lombok.Getter;

import java.util.*;



public class MemoryMemberRepository  {
    private static final Map<Long, Member> store = new HashMap<>();
    private static long sequence = 0L;

    @Getter
    private static final MemoryMemberRepository instance = new MemoryMemberRepository();
    private MemoryMemberRepository() {
    }



    public Member save(Member member){

        member.setUid(++sequence);

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
    public Optional<Member> findByLoginPwd(String pwd){
        return this.findAll().stream()
                .filter(m -> m.getPwd().equals(pwd)).findFirst();
    }
    public Member login(String loginId, String password) {

        return instance.findByLoginId(loginId)
                .filter(m -> m.getPwd().equals(password))
                .orElse(null);
    }
    public List<Member> findAll() {
        return new ArrayList<>(store.values());
    }

    public void clearStore() {
        store.clear();
    }


}
