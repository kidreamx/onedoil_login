

new Swiper('.notice-line .swiper', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});


new Swiper('.promotion .swiper', {
    slidesPerView: 3, //한번에 보여줄 슬라이드 개수
    spaceBetween: 10, //슬라이드 사이 여백
    centeredSlides: true, //1번 슬라이드가 가운데 보이기
    loop : true,
    autoplay: {
        delay: 5000
    },
    pagination:{
        el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
        clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});

new Swiper('.location .swiper',{
    autoplay: {
        delay: 3000
    },
    loop: true,
    spaceBetween :30,
    slidesPerView: 5,
    navigation:{
        prevEl: '.location .swiper-prev',
        nextEl: '.location .swiper-next'
    }
});


const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();


// 이미지 클릭 이벤트 추가
document.querySelectorAll('.swiper-slide img').forEach(function(region) {
    region.addEventListener('click', function(event) {
        var regionName = this.id; // 이미지 id를 가져옴
        handleRegionClick(regionName); // handleRegionClick 함수 호출
    });
});



function modal(id) {
    var zIndex = 9999;
    var modal = document.getElementById(id);

    // 모달 div 뒤에 희끄무레한 레이어
    var bg = document.createElement('div');
    bg.setStyle({
        position: 'fixed',
        zIndex: zIndex,
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        overflow: 'auto',
        // 레이어 색갈은 여기서 바꾸면 됨
        backgroundColor: 'rgba(0,0,0,0.4)'
    });
    document.body.append(bg);

    // 닫기 버튼 처리, 시꺼먼 레이어와 모달 div 지우기
    modal.querySelector('.modal_close_btn').addEventListener('click', function() {
        bg.remove();
        modal.style.display = 'none';
    });

    modal.setStyle({
        position: 'fixed',
        display: 'block',
        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',

        // 시꺼먼 레이어 보다 한칸 위에 보이기
        zIndex: zIndex + 1,

        // div center 정렬
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        msTransform: 'translate(-50%, -50%)',
        webkitTransform: 'translate(-50%, -50%)'
    });
}

// Element 에 style 한번에 오브젝트로 설정하는 함수 추가
Element.prototype.setStyle = function(styles) {
    for (var k in styles) this.style[k] = styles[k];
    return this;
};

document.getElementById('popup_open_btn').addEventListener('click', function() {
    // 모달창 띄우기
    modal('my_modal1');
});


document.getElementById('popup_open_btn1').addEventListener('click', function() {
    // 모달창 띄우기
    modal('city_modal2');
});

document.getElementById('popup_open_btn2').addEventListener('click', function() {
    // 모달창 띄우기
    modal('city_modal3');
});

document.getElementById('popup_open_btn3').addEventListener('click', function() {
    // 모달창 띄우기
    modal('city_modal4');
});

document.getElementById('popup_open_btn4').addEventListener('click', function() {
    // 모달창 띄우기
    modal('city_modal5');
});

document.getElementById('popup_open_btn5').addEventListener('click', function() {
    // 모달창 띄우기
    modal('city_modal6');
});
document.getElementById('popup_open_btn6').addEventListener('click', function() {
    // 모달창 띄우기
    modal('city_modal7');
});
document.getElementById('popup_open_btn7').addEventListener('click', function() {
    // 모달창 띄우기
    modal('city_modal8');
});


