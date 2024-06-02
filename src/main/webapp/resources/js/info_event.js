// 계절 정보 객체 생성
var seasonsInfo = {
  spring: {
    images: ['/resources/images copy/계절별축제/봄축제/yesu.jpg'
  ,'/resources/images copy/계절별축제/봄축제/mokpow.jpg','/resources/images copy/계절별축제/봄축제/Gwnagju.jpg'
  ,'/resources/images copy/계절별축제/봄축제/여수 거북선.png','/resources/images copy/계절별축제/봄축제/담양 대나무.jpeg'],
    texts: [
     '일시 : 2024년 3월 23일 ~ 2024년 3월 24일 <br>행사 이름: 여수 진달래축제 <br> 주최: 여 수 시'
    ,'일시 : 2024년 3월 30일 ~ 2024년 3월 31일 <br>행사 이름: 유달산 봄축제 <br> 주최: 목포시/목포시축제추진위원회'
    ,'일시 : 2024년 4월 26일 ~ 2024년 4월 27일 <br>행사 이름: 광주문화유산야행 <br> 주최: 광주광역시 동구/광주광역시 동구'
    ,'일시 : 2024년 5월 03일 ~ 2024년 5월 06일 <br>행사 이름: 제 58회 여수 거북선 축제 <br> 주최: 여수시, (사)여수거북선축제보존회/여수거북선축제추진위원회'
    ,'일시 : 2024년 5월 11일 ~ 2024년 5월 15일 <br>행사 이름: 담양 대나무 축제 <br> 주최: 담양군/(사)담양대나무축제위원회'
  ],
    links: [
      'https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=140736'
      ,'http://yeosujindalrae.co.kr/main/page.html?pid=13'
      ,'https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=a8478f7f-2acc-48ef-a879-cfdd7f7b5852&cntntsNm=%EA%B4%91%EC%A3%BC%EB%AC%B8%ED%99%94%EC%9C%A0%EC%82%B0%EC%95%BC%ED%96%89'
      ,'https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do;jsessionid=B539E81F9DE133CF3FB41FC4C3CCD712.instance1?cmsCntntsId=553315&Flag=Y'
      ,'https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?cmsCntntsId=506480'
    ]
  },
  summer: {
    images: [
      '/resources/images copy/계절별축제/여름축제/Naju.png'
      ,'/resources/images copy/계절별축제/여름축제/glory.png'
    
    ],
    texts: [
      '일시 : 2023년 6월 02일 ~ 2023년 6월 04일 <br>행사 이름: 나주문화재야행 <br> 주최:문화재청, 전라남도, 나주시/나주읍성권도시재생주민협의체'
      ,'일시 : 2023년 6월 22일 ~ 2023년 6월 25일 <br>행사 이름: 영광법성포단오제 <br> 주최:법성포단오제보존회, 법성포단오제 제전위원회/(사)법성포단오제보존회, 법성포단오제 제전위원회'
    ],
    links: [
      'https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=1d3238d9-455f-4384-a1c3-21ba4c9d8176&cntntsNm=%EC%98%81%EA%B4%91%EB%B2%95%EC%84%B1%ED%8F%AC%EB%8B%A8%EC%98%A4%EC%A0%9C'
      ,'https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=19ab1881-4e7f-4ef1-8e4d-0940f5f5c1be&cntntsNm=%EB%82%98%EC%A3%BC%EB%AC%B8%ED%99%94%EC%9E%AC%EC%95%BC%ED%96%89'
    ]
  },
  fall: {
    images: ['/resources/images copy/계절별축제/가을축제/충장축제.png'],
    texts: ['일시 : 2024년 10월 02일 ~ 2024년 10월 06일 <br>행사 이름: 광주 충장축제 <br> 주최: 광주광역시'],
    links: ['https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=7d2cf1b1-9e46-470d-bfa9-4e2b8272802b&cntntsNm=%EA%B4%91%EC%A3%BC%EC%B6%94%EC%96%B5%EC%9D%98%EC%B6%A9%EC%9E%A5%EC%B6%95%EC%A0%9C']
  },
  /*winter: {
    images: [],
    texts: [],
    links: []
  }*/
};

// 계절 클릭 이벤트 핸들러 설정
// 계절 클릭 이벤트 핸들러 설정
document.querySelectorAll('.season_menu th').forEach(function(season) {
  season.addEventListener('click', function(event) { //클릭하면 showContent 실행
    var seasonName = this.id; // 클릭된 요소의 id를 계절 이름으로 사용
    showContent(seasonName);
  });
});

// 계절 내용을 변경하는 함수
function showContent(season) {
  var contentDiv = document.querySelector('.season_content');
  var seasonInfo = seasonsInfo[season]; // 해당 계절에 대한 정보 가져오기

  if (seasonInfo) {
    // 계절 정보가 있다면 이미지와 텍스트 업데이트
    var contentHTML = '';
    for (var i = 0; i < seasonInfo.images.length; i++) {
      contentHTML += '<div class="content-item">' +
                        '<div class="image-container">' +
                        '<a href="' + seasonInfo.links[i] +'" target="_blank">'+
                          '<img src="' + seasonInfo.images[i] + '" alt="' + season + ' 이미지">' +
                          '</a>'+
                        '</div>' +
                        '<div class="text-container">' +
                          '<p>' + seasonInfo.texts[i] + '</p>' +
                        '</div>' +
                      '</div>';
    }
    contentDiv.innerHTML = contentHTML;
  } else {
    // 계절 정보가 없다면 메시지 출력
    contentDiv.innerHTML = '해당 계절 정보 없음';
  }
}
