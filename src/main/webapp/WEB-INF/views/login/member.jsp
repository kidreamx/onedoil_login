<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>onedoil</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&family=Noto+Sans+KR:wght@100..900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/reset-css@5.0.2/reset.min.css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />

    <!-- swiper -->
    <link rel="stylesheet"  href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <link rel="stylesheet" href="../../../resources/css/member.css">
    <script defer src="../../../resources/js/main.js"></script>
</head>
<body>

<header>
    <div class="inner">
        <a href="../../../index.html" class="logo">
            <img src="../../../resources/images/전라남도투어%20nobackcut.png" alt="onedoil">
        </a>
        <div class="sub-menu">
            <ul class="menu">
                <li>
                    <a href="/member/login">로그인</a>
                </li>
                <li>
                    <a href="/member/new-form">회원가입</a>
                </li>
                <li>
                    <a href="/member/my-page">마이페이지</a>
                </li>
            </ul>
        </div>

        <div class="main_menu">
            <div class="menu-back"></div>
            <ul class="menu_list">
                <li>
                    <a href="../../../introduce.html">소개</a>
                </li>
                <li>
                    <a href="../../../region.html">지역</a>
                </li>
                <li>
                    <a href="../../../infro_event.html">행사정보</a>
                </li>
                <li>
                    <a href="../../../border.html">게시판</a>
                </li>
            </ul>
        </div>
    </div>

</header>

<!-- members -->
<section class="members">
    <div class="inner">

        <div class="container">

            <form action="save" method="post">
                <h1>회원가입</h1>
                <label for="name">이름</label>
                <input type="text" required placeholder="이름" id="name"/>

                <label for="id">아이디</label>
                <input type="text" required placeholder="아이디" maxlength="15" minlength="5" id="id" name ="Id"/>

                <label for="pwd">비밀번호</label>
                <input type="password" required placeholder="비밀번호" minlength="8" id="pwd" name = "Pwd"/>

                <label for="mail">이메일</label>
                <input type="email" required placeholder="이메일" id="mail"/>

                <label for="tel">전화번호</label>
                <input type="tel" required placeholder="전화번호(***-****-****)" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" id="tel"/>

                <label for="age">만나이</label>
                <input type="number" required placeholder="만 나이" min="12" max="122" id="age"/>

                <label for="file">파일</label>
                <input type="file" accept="image/*, audio/*, video/*" id="file"/>

                <button class="btn" type ="submit">가입하기</button>


            </form>
        </div>
    </div>
</section>

<footer>
    <div class="inner">
        <ul class="menu">
            <li><a href="#" class="green">개인정보처리방침</a></li>
            <li><a href="#">홈페이지 이용약관</a></li>
            <li><a href="#">위치정보 이용약관</a></li>

        </ul>

        <div class="info">
            <span>(자율설계) 원두일 공동대표 : 전호원 최승원 윤경일</span>
            <span>TEL : 010) 9143-3492 / FAX : 062) 1234-1234</span>
            <span>조선대학교 IT융합대학 컴퓨터공학과 19</span>
        </div>

        <p class="copyright">
            &copy; <span class="this-year"> </span> ONEDOIL . ALL RIGHTS RESERVED.
        </p>

    </div>
</footer>

</body>
</html>