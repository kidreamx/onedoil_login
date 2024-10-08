<%@ page contentType="text/html;charset=UTF-8" language="java" pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ page import="com.example.demo.basic.domain.member.Member" %>
<%@ page import="com.example.demo.basic.domain.member.MemoryMemberRepository" %>
<%@ page import="org.springframework.beans.propertyeditors.URLEditor" %>
<%@ page import="java.net.URLDecoder" %>
<%@ page import="java.nio.charset.StandardCharsets" %>
<%
    Cookie[] cookies = request.getCookies();
    String id = null;
    if(cookies!=null){
        for (Cookie cookie : cookies) {
            if (cookie.getName().contains("id")) {
                    id = cookie.getValue();
            }

        }
    }
%>
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

    <link rel="stylesheet" href="/resources/css/style.css">
    <script defer src="/resources/js/main.js"></script>

</head>
<body>

<header>
    <div class="inner">
        <a href="/index.html" class="logo">
            <img src="/resources/images/전라남도투어%20nobackcut.png" alt="onedoil">
        </a>
        <div class="sub-menu">
            <ul class="menu">
                <li>
                    <a href ="#"> <%=id%>님 </a>
                </li>
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
                    <a href="introduce.html">소개</a>
                </li>
                <li>
                    <a href="region.html">지역</a>
                </li>
                <li>
                    <a href="infro_event.html">행사정보</a>
                </li>
                <li>
                    <a href="/border.html">게시판</a>
                </li>
            </ul>
        </div>
    </div>
</header>

<section class="notice">
    <div class="promotion">
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="/resources/images/test1.png" alt="">
                    <div class="content">
                        <h1 class="htest1">화려한 빛</h1>
                        <p class="ptest1">아름다운 감동이 전하는<br/>
                            세계가 인정한 문화 유적</p>
                        <a href="#" class="btn" id="popup_open_btn">자세히 보기</a>
                    </div>
                </div>

                <div class="swiper-slide">
                    <img src="/resources/images/test2.png" alt="">
                    <div class="content">
                        <h1 class="htest1">아름다운 도시</h1>
                        <p class="ptest1">센터럴파크<br/>
                            사람과 자연이 공존하는 도시</p>
                        <a href="#" class="btn" id="popup_open_btn1">자세히 보기</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="resources/images/test3.png" alt="">
                    <div class="content">
                        <h1 class="htest1">낭만 기차여행</h1>
                        <p class="ptest1">가족과 연인과 함께하는<br/>
                            추억의 기찻길 여행</p>
                        <a href="#" class="btn" id="popup_open_btn2">자세히 보기</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="resources/images/test4.png" alt="">
                    <div class="content">
                        <h1 class="htest1">귀여운 오렌지 빛깔</h1>
                        <p class="ptest1">제주도에서 전하는<br/>
                            싱그러운 제주 감귤의 맛</p>
                        <a href="#" class="btn" id="popup_open_btn3">자세히 보기</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="/resources/images/test5.png" alt="">
                    <div class="content">
                        <h1 class="htest1">아름다운 벚꽃</h1>
                        <p class="ptest1"> 분홍색으로 물든 벚꽃<br/>
                            아름다운 연인과 함께</p>
                        <a href="#" class="btn" id="popup_open_btn4">자세히 보기</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="/resources/images/test6.png" alt="">
                    <div class="content">
                        <h1 class="htest1">전통이 담긴 유적</h1>
                        <p class="ptest1">역사과 그대로<br/>
                            세계에서 인정한 유적지</p>
                        <a href="#" class="btn" id="popup_open_btn5">자세히 보기</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="/resources/images/test7.png" alt="">
                    <div class="content">
                        <h1 class="htest1">하늘과 같은 바다</h1>
                        <p class="ptest1">확트인 전경이 전하는<br/>
                            화려한 파도 소리를 만끽</p>
                        <a href="#" class="btn" id="popup_open_btn6">자세히 보기</a>
                    </div>
                </div>
                <div class="swiper-slide">
                    <img src="/resources/images/test8.png" alt="">
                    <div class="content">
                        <h1 class="htest1">힐링의 숲</h1>
                        <p class="ptest1">초록빛으로 물든<br/>
                            아름다운 힐링의 공간</p>
                        <a href="#" class="btn" id="popup_open_btn7">자세히 보기</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-prev">
            <div class="material-symbols-outlined">arrow_back</div>
        </div>
        <div class="swiper-next">
            <div class="material-symbols-outlined">arrow_forward</div>
        </div>
    </div>
</section>


<div id="my_modal1" class="modals">
    화려한 빛과 아름다운 감동이 전하는 세계가 인정한 문화 유적들은 우리에게 과거와 현재, 그리고 미래 사이의 다리 역할을 합니다. 이들은 시간을 초월해 인류의 역사, 예술, 그리고 정신을 담고 있으며, 세계 곳곳에 그 존재감을 빛내고 있습니다.
    <a class="modal_close_btn">X</a>
</div>

<div id="city_modal2" class="modals">
    아름다운 도시 중 하나는 센터럴파크를 품고 있는 뉴욕시입니다. 이곳은 사람과 자연이 조화롭게 공존하는 모범적인 사례로, 도시 한복판에 위치한 거대한 녹색 공간으로 유명합니다. 센터럴파크는 도시의 소음과 분주함 속에서도 평온과 자연의 아름다움을 찾고자 하는 사람들에게 피난처와 같은 존재입니다.
    <a class="modal_close_btn">X</a>
</div>

<div id="city_modal3" class="modals">
    아름다운 도시 중 하나는 센터럴파크를 품고 있는 뉴욕시입니다. 이곳은 사람과 자연이 조화롭게 공존하는 모범적인 사례로, 도시 한복판에 위치한 거대한 녹색 공간으로 유명합니다. 센터럴파크는 도시의 소음과 분주함 속에서도 평온과 자연의 아름다움을 찾고자 하는 사람들에게 피난처와 같은 존재입니다.
    <a class="modal_close_btn">X</a>
</div>

<div id="city_modal4" class="modals">
    아름다운 도시 중 하나는 센터럴파크를 품고 있는 뉴욕시입니다. 이곳은 사람과 자연이 조화롭게 공존하는 모범적인 사례로, 도시 한복판에 위치한 거대한 녹색 공간으로 유명합니다. 센터럴파크는 도시의 소음과 분주함 속에서도 평온과 자연의 아름다움을 찾고자 하는 사람들에게 피난처와 같은 존재입니다.
    <a class="modal_close_btn">X</a>
</div>

<div id="city_modal5" class="modals">
    아름다운 도시 중 하나는 센터럴파크를 품고 있는 뉴욕시입니다. 이곳은 사람과 자연이 조화롭게 공존하는 모범적인 사례로, 도시 한복판에 위치한 거대한 녹색 공간으로 유명합니다. 센터럴파크는 도시의 소음과 분주함 속에서도 평온과 자연의 아름다움을 찾고자 하는 사람들에게 피난처와 같은 존재입니다.
    <a class="modal_close_btn">X</a>
</div>

<div id="city_modal6" class="modals">
    아름다운 도시 중 하나는 센터럴파크를 품고 있는 뉴욕시입니다. 이곳은 사람과 자연이 조화롭게 공존하는 모범적인 사례로, 도시 한복판에 위치한 거대한 녹색 공간으로 유명합니다. 센터럴파크는 도시의 소음과 분주함 속에서도 평온과 자연의 아름다움을 찾고자 하는 사람들에게 피난처와 같은 존재입니다.
    <a class="modal_close_btn">X</a>
</div>

<div id="city_modal7" class="modals">
    아름다운 도시 중 하나는 센터럴파크를 품고 있는 뉴욕시입니다. 이곳은 사람과 자연이 조화롭게 공존하는 모범적인 사례로, 도시 한복판에 위치한 거대한 녹색 공간으로 유명합니다. 센터럴파크는 도시의 소음과 분주함 속에서도 평온과 자연의 아름다움을 찾고자 하는 사람들에게 피난처와 같은 존재입니다.
    <a class="modal_close_btn">X</a>
</div>

<div id="city_modal8" class="modals">
    아름다운 도시 중 하나는 센터럴파크를 품고 있는 뉴욕시입니다. 이곳은 사람과 자연이 조화롭게 공존하는 모범적인 사례로, 도시 한복판에 위치한 거대한 녹색 공간으로 유명합니다. 센터럴파크는 도시의 소음과 분주함 속에서도 평온과 자연의 아름다움을 찾고자 하는 사람들에게 피난처와 같은 존재입니다.
    <a class="modal_close_btn">X</a>
</div>


<!-- LOCATION -->
<section class="location">
    <h1>지역</h1>
    <div class="inner">
        <div class="swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <a href="region.html"><img src="/resources/images/지역로고/광주.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href="region.html"><img src="/resources/images/지역로고/담양.jpg" alt="" id="Damyang"></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="/resources/images/지역로고/곡성.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="/resources/images/지역로고/나주.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="/resources/images/지역로고/고흥.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="/resources/images/지역로고/목포.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="/resources/images/지역로고/순천.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="/resources/images/지역로고/여수.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="/resources/images/지역로고/영광.jpg" alt=""></a>
                </div>
                <div class="swiper-slide">
                    <a href="#"><img src="/resources/images/지역로고/해남.jpg" alt=""></a>
                </div>
            </div>
        </div>
        <div class="swiper-prev">
            <div class="material-symbols-outlined">arrow_back</div>
        </div>
        <div class="swiper-next">
            <div class="material-symbols-outlined">arrow_forward</div>
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