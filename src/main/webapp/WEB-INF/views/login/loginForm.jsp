<%@ page contentType="text/html;charset=UTF-8" language="java" %>

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
    <script defer src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

    <link rel="stylesheet" href="../../../resources/css/login.css">

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

<section class="login-page">
    <div class = "inner">
        <div class="card">
            <div class="card2">
                <form action="login-conform" method="get">

                <p id = "heading">로그인</p>
                <div class="field">
                    <svg
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                            class="input-icon"
                    >
                        <path
                                d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"
                        ></path>
                    </svg>

                    <input
                            type="text"
                            class="input-field"
                            placeholder="아이디"
                            autocomplete="off"
                            name ="id"
                    />
                </div>
                <div class="field">
                    <svg
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            height="16"
                            width="16"
                            xmlns="http://www.w3.org/2000/svg"
                            class="input-icon"
                    >
                        <path
                                d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"
                        ></path>
                    </svg>
                        <input type="password" class="input-field" placeholder="비밀번호" name="password" />
                </div>
                <div class="btn">
                    <button class="button1" type = "submit">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                    <button class="button2">Sign Up</button>
                </div>
                <button class="button3">Forgot Password</button>
                </form>
            </div>
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