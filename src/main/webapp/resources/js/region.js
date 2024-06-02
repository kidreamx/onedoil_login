new Swiper('.location .swiper',{
  autoplay: true,
  loop: true,
  spaceBetween :30,
  slidesPerView: 5,
  navigation:{
    prevEl: '.location .swiper-prev',
    nextEl: '.location .swiper-next'
  },
  autoplay: {
    delay: 10000
  }
});




var regionInfo = {
  gwangju: {
    images: ['../resources/images/문화재/증심사.jpg',
      '../resources/images/문화재/선교사사택.jpg',
      '../resources/images/문화재/주상절리대.jpg'
    ],
    texts: [
     '<strong>증심사 </strong> <br>광주광역시 동구 무등산 서쪽 기슭에 자리한 불교 절입니다.  <br> 이 절은 신라 시대에 철감선사 도윤에 의해 9세기 중엽에 처음 세워졌으며, 고려 선종 때 혜조국사가 중수했습니다. ',
     '<strong>우일선 선교사 사택</strong> <br>미국인 선교사 우일선(Robert M. Willson)에 의해 1920년대에 지어졌다고 전해지며 광주에 남아있는 가장 오래된 서양식 주택이다. 1989년 3월 20일 광주광역시의 기념물 제15호로 지정되었다.  <br>이 건물의 평면은 정사각형으로 1층에는 거실, 가족실, 다용도실, 부엌, 욕실이 있고 2층에는 침실을 두었으며 지하에는 창고, 보일러실이 있다.',
     '<strong>주상절리대</strong> <br>무등산에 있는, 기둥 모양의 절리가 늘어선 것이다.  <br> 대한민국의 천연기념물 제465호로 지정되어 있다. 입석대와 서석대 그리고 규봉에 있으며, 입석대와 서석대에 있는 절리대의 돌기둥 하나의 크기가 지금까지 남한에서 보고된 것 중 가장 커서 주목받고 있다.'
    ],
    links: [
      
    ]
  },
  Damyang: {
    images: [
      '/resources/images/문화재/창평향교.jpg',
      '/resources/images/문화재/선교사사택.jpg'
    ],
  
    texts: [
      '<strong>창평향교 </strong><br>향교는 훌륭한 유학자를 제사하고 지방민의 유학교육과 교화를 위하여 나라에서 지은 교육기관입니다. <br> 성종 10년 (1479)**에 지금의 자리로 옮겼으며, 임진왜란 (1592) 때 불타 없어진 것을 그 후에 다시 지었습니다.',
      '<strong>우일선 선교사 사택</strong> <br>광주광역시 동구 무등산 서쪽 기슭에 자리한 불교 절입니다.  <br> 이 절은 신라 시대에 철감선사 도윤에 의해 9세기 중엽에 처음 세워졌으며, 고려 선종 때 혜조국사가 중수했습니다.'
    ],
    links: [
      
    ]
  },

  Gokseong: {
    images: ['/resources/images/문화재/태안사 일주문.jpg',
      '/resources/images/문화재/곡성덕양서원.jpg'
    ],
    texts: [
     '<strong>태안사 일주문 </strong> <br>곡성 태안사 일주문(谷城 泰安寺 一柱門)는 대한민국 전라남도 곡성군 죽곡면 원달리, 태안사에 있는 일주문이다. 1981년 10월 20일 전라남도의 유형문화재 제83호로 지정되었다.  <br> 태안사 일주문은 위로 갈수록 좁아지는 두 개의 굵은 기둥 위에 앞면 1칸의 규모로 세웠으며, 지붕 옆면이 사람 인(人)자 모양인 단순한 맞배지붕이다.  ',
     '<strong>덕양서원</strong> <br>대한민국 전라남도 고흥군 동일면 덕흥리에 있는 서원이다. 또한 덕양서원은 1984년 2월 29일에 전라남도의 문화재자료 제 53호로 지정되었다. <br> 이 서원은 영조 44년(1768)에 유허비를 세우면서 사당 형태로 세웠다. 그 뒤 1928년에 비각을 고쳐 세우고 서원을 세웠으며, 황재 이기천·송애 정동준·돈암 이린기·도사 오광생·양촌 노주관·입재 문악연·정소송·정난파·명중화의 위패를 추가로 모셨다.'
    
    ],
    links: [
      
    ]
  },

  Naju: {
    images: ['./resources/images/문화재/나주불회사.jpg',
      './resources/images/문화재/나주읍성.jpg'
    ],
    texts: [
     '<strong> 불회사 대웅전 </strong> <br>대한민국 전라남도 나주시 불회사에 있는 조선시대의 불전이다. 2001년 4월 17일 대한민국의 보물 제1310호로 지정되었다. <br> 불회사대웅전은 18세기 말에 중건된 건물로, 정면 3칸, 측면 3칸의 구조를 가지고 있습니다. 건축은 전통적인 다포계 수법을 따르면서도, 특히 정면 기둥 머리에 용머리장식을 한 안초공 수법과 내부의 화려한 연봉 장식 등으로 변산반도의 영광의 불갑사대웅전, 부안의 개암사대웅전과 같은 계보를 이루고 있습니다. 내부 천장은 물고기와 연화문 등으로 정교하게 장식되어 있으며, 1799년 조선 정조 22년에 중건된 당시의 면모를 잘 보존하고 있어 역사적, 학술적으로 중요한 가치를 지닙니다.',
     '<strong>나주읍성</strong> <br>대한민국 전라남도 나주시 성북동·교동 일대에 있는 성으로 사적 제337호이다. <br> 복원 순서대로 남문은 남고문(南顧門), 동문은 동점문(東漸門), 서문은 영금문(暎錦門), 북문은 북망문(北望門)이다.'
    
    ],
    links: [
      
    ]
  },

  Goheung: {
    images: ['./resources/images/문화재/나주불회사.jpg',
      './resources/images/문화재/나주읍성.jpg'
    ],
    texts: [
     '<strong> 불회사 대웅전 </strong> <br>대한민국 전라남도 나주시 불회사에 있는 조선시대의 불전이다. 2001년 4월 17일 대한민국의 보물 제1310호로 지정되었다. <br> 불회사대웅전은 18세기 말에 중건된 건물로, 정면 3칸, 측면 3칸의 구조를 가지고 있습니다. 건축은 전통적인 다포계 수법을 따르면서도, 특히 정면 기둥 머리에 용머리장식을 한 안초공 수법과 내부의 화려한 연봉 장식 등으로 변산반도의 영광의 불갑사대웅전, 부안의 개암사대웅전과 같은 계보를 이루고 있습니다. 내부 천장은 물고기와 연화문 등으로 정교하게 장식되어 있으며, 1799년 조선 정조 22년에 중건된 당시의 면모를 잘 보존하고 있어 역사적, 학술적으로 중요한 가치를 지닙니다.',
     '<strong>나주읍성</strong> <br>대한민국 전라남도 나주시 성북동·교동 일대에 있는 성으로 사적 제337호이다. <br> 복원 순서대로 남문은 남고문(南顧門), 동문은 동점문(東漸門), 서문은 영금문(暎錦門), 북문은 북망문(北望門)이다.'
    ],
    links: [
    ]
  },

  Mokpo: {
    images: ['/resources/images/문화재/나주불회사.jpg',
      '/resources/images/문화재/나주읍성.jpg'
    ],
    texts: [
     '<strong> 불회사 대웅전 </strong> <br>대한민국 전라남도 나주시 불회사에 있는 조선시대의 불전이다. 2001년 4월 17일 대한민국의 보물 제1310호로 지정되었다. <br> 불회사대웅전은 18세기 말에 중건된 건물로, 정면 3칸, 측면 3칸의 구조를 가지고 있습니다. 건축은 전통적인 다포계 수법을 따르면서도, 특히 정면 기둥 머리에 용머리장식을 한 안초공 수법과 내부의 화려한 연봉 장식 등으로 변산반도의 영광의 불갑사대웅전, 부안의 개암사대웅전과 같은 계보를 이루고 있습니다. 내부 천장은 물고기와 연화문 등으로 정교하게 장식되어 있으며, 1799년 조선 정조 22년에 중건된 당시의 면모를 잘 보존하고 있어 역사적, 학술적으로 중요한 가치를 지닙니다.',
     '<strong>나주읍성</strong> <br>대한민국 전라남도 나주시 성북동·교동 일대에 있는 성으로 사적 제337호이다. <br> 복원 순서대로 남문은 남고문(南顧門), 동문은 동점문(東漸門), 서문은 영금문(暎錦門), 북문은 북망문(北望門)이다.'
    ],
    links: [
    ]
  },

  Suncheon: {
    images: ['/resources/images/문화재/나주불회사.jpg',
      '/resources/images/문화재/나주읍성.jpg'
    ],
    texts: [
     '<strong> 불회사 대웅전 </strong> <br>대한민국 전라남도 나주시 불회사에 있는 조선시대의 불전이다. 2001년 4월 17일 대한민국의 보물 제1310호로 지정되었다. <br> 불회사대웅전은 18세기 말에 중건된 건물로, 정면 3칸, 측면 3칸의 구조를 가지고 있습니다. 건축은 전통적인 다포계 수법을 따르면서도, 특히 정면 기둥 머리에 용머리장식을 한 안초공 수법과 내부의 화려한 연봉 장식 등으로 변산반도의 영광의 불갑사대웅전, 부안의 개암사대웅전과 같은 계보를 이루고 있습니다. 내부 천장은 물고기와 연화문 등으로 정교하게 장식되어 있으며, 1799년 조선 정조 22년에 중건된 당시의 면모를 잘 보존하고 있어 역사적, 학술적으로 중요한 가치를 지닙니다.',
     '<strong>나주읍성</strong> <br>대한민국 전라남도 나주시 성북동·교동 일대에 있는 성으로 사적 제337호이다. <br> 복원 순서대로 남문은 남고문(南顧門), 동문은 동점문(東漸門), 서문은 영금문(暎錦門), 북문은 북망문(北望門)이다.'
    ],
    links: [
    ]
  },

  Yeosu: {
    images: ['/resources/images/문화재/나주불회사.jpg',
      '/resources/images/문화재/나주읍성.jpg'
    ],
    texts: [
     '<strong> 불회사 대웅전 </strong> <br>대한민국 전라남도 나주시 불회사에 있는 조선시대의 불전이다. 2001년 4월 17일 대한민국의 보물 제1310호로 지정되었다. <br> 불회사대웅전은 18세기 말에 중건된 건물로, 정면 3칸, 측면 3칸의 구조를 가지고 있습니다. 건축은 전통적인 다포계 수법을 따르면서도, 특히 정면 기둥 머리에 용머리장식을 한 안초공 수법과 내부의 화려한 연봉 장식 등으로 변산반도의 영광의 불갑사대웅전, 부안의 개암사대웅전과 같은 계보를 이루고 있습니다. 내부 천장은 물고기와 연화문 등으로 정교하게 장식되어 있으며, 1799년 조선 정조 22년에 중건된 당시의 면모를 잘 보존하고 있어 역사적, 학술적으로 중요한 가치를 지닙니다.',
     '<strong>나주읍성</strong> <br>대한민국 전라남도 나주시 성북동·교동 일대에 있는 성으로 사적 제337호이다. <br> 복원 순서대로 남문은 남고문(南顧門), 동문은 동점문(東漸門), 서문은 영금문(暎錦門), 북문은 북망문(北望門)이다.'
    ],
    links: [
    ]
  },

  yeong_gwang: {
    images: ['/resources/images/문화재/나주불회사.jpg',
      '/resources/images/문화재/나주읍성.jpg'
    ],
    texts: [
     '<strong> 불회사 대웅전 </strong> <br>대한민국 전라남도 나주시 불회사에 있는 조선시대의 불전이다. 2001년 4월 17일 대한민국의 보물 제1310호로 지정되었다. <br> 불회사대웅전은 18세기 말에 중건된 건물로, 정면 3칸, 측면 3칸의 구조를 가지고 있습니다. 건축은 전통적인 다포계 수법을 따르면서도, 특히 정면 기둥 머리에 용머리장식을 한 안초공 수법과 내부의 화려한 연봉 장식 등으로 변산반도의 영광의 불갑사대웅전, 부안의 개암사대웅전과 같은 계보를 이루고 있습니다. 내부 천장은 물고기와 연화문 등으로 정교하게 장식되어 있으며, 1799년 조선 정조 22년에 중건된 당시의 면모를 잘 보존하고 있어 역사적, 학술적으로 중요한 가치를 지닙니다.',
     '<strong>나주읍성</strong> <br>대한민국 전라남도 나주시 성북동·교동 일대에 있는 성으로 사적 제337호이다. <br> 복원 순서대로 남문은 남고문(南顧門), 동문은 동점문(東漸門), 서문은 영금문(暎錦門), 북문은 북망문(北望門)이다.'
    ],
    links: [
    ]
  },

  Haenam: {
    images: ['/resources/images/문화재/나주불회사.jpg',
      '/resources/images/문화재/나주읍성.jpg'
    ],
    texts: [
     '<strong> 불회사 대웅전 </strong> <br>대한민국 전라남도 나주시 불회사에 있는 조선시대의 불전이다. 2001년 4월 17일 대한민국의 보물 제1310호로 지정되었다. <br> 불회사대웅전은 18세기 말에 중건된 건물로, 정면 3칸, 측면 3칸의 구조를 가지고 있습니다. 건축은 전통적인 다포계 수법을 따르면서도, 특히 정면 기둥 머리에 용머리장식을 한 안초공 수법과 내부의 화려한 연봉 장식 등으로 변산반도의 영광의 불갑사대웅전, 부안의 개암사대웅전과 같은 계보를 이루고 있습니다. 내부 천장은 물고기와 연화문 등으로 정교하게 장식되어 있으며, 1799년 조선 정조 22년에 중건된 당시의 면모를 잘 보존하고 있어 역사적, 학술적으로 중요한 가치를 지닙니다.',
     '<strong>나주읍성</strong> <br>대한민국 전라남도 나주시 성북동·교동 일대에 있는 성으로 사적 제337호이다. <br> 복원 순서대로 남문은 남고문(南顧門), 동문은 동점문(東漸門), 서문은 영금문(暎錦門), 북문은 북망문(北望門)이다.'
    ],
    links: [
    ]
  },
};

var regioncolor = {
  gwangju: {
    colors: ['linear-gradient(0deg, rgba(255,227,227,1) 0%, rgba(254,250,239,1) 100%)'],
  },
  Damyang: {
    colors: [
      'linear-gradient(0deg, rgba(227,255,240,1) 0%, rgba(254,250,239,1) 100%)'
    ], 
  },

  Gokseong: {
    colors: ['linear-gradient(0deg, rgba(0,144,214,0.8184523809523809) 0%, rgba(254,250,239,1) 100%)'],
  },

  Naju: {
    colors: ['linear-gradient(0deg, rgba(240,226,165,1) 0%, rgba(254,250,239,1) 100%)'],
  },
  Goheung: {
    colors: ['linear-gradient(0deg, rgba(113,137,232,1) 0%, rgba(254,250,239,1) 100%)'],
  },
  Mokpo: {
    colors: ['linear-gradient(180deg, rgba(254,250,239,1) 0%, rgba(233,255,217,1) 50%, rgba(203,221,250,1) 100%)'],
  },
  Suncheon: {
    colors: ['linear-gradient(0deg, rgba(236,193,91,1) 0%, rgba(254,250,239,1) 100%)'],
  },
  Yeosu: {
    colors: ['linear-gradient(0deg, rgba(113,165,219,1) 0%, rgba(254,250,239,1) 100%)'],
  },
  yeong_gwang: {
    colors: ['linear-gradient(180deg, rgba(254,250,239,1) 0%, rgba(250,215,163,1) 50%, rgba(172,202,251,1) 100%)'],
  },
  Haenam: {
    colors: ['linear-gradient(180deg, rgba(254,250,239,1) 0%, rgba(254,223,209,1) 50%, rgba(195,216,246,1) 100%)'],
  },
};


document.querySelectorAll('.swiper-slide img').forEach(function(region) {
  region.addEventListener('click', function(event) { //클릭하면 showContent 실행
    var regionName = this.id; 
    
    showContent(regionName);
    
    btnClick();
    changecolor(regionName);
  });
});



function changecolor(region){
  var sections = document.getElementsByTagName("article");
  var colors = regioncolor[region].colors;

  
  if (colors && colors.length > 0) {
    var color = colors[0]; // 첫 번째 색상 값만 사용
    for (var i = 0; i < sections.length; i++) {
      sections[i].style.background = color;
    }
  } else {
    console.error('색상 정보를 찾을 수 없습니다: ', region);
  }
}



function showContent(region) {
  var contentDiv = document.querySelector('.region_content');
  var regionData = regionInfo[region]; 

  if (regionData) {
    var contentHTML = '';
    for (var i = 0; i < regionData.images.length; i++) {
      contentHTML += '<div class = "content-item">'+
                        '<div class="image-container">'+
                          '<img src="' + regionData.images[i] + '" alt="' + ' 이미지">' +                          
                        '</div>' +

                        '<div class="text-container">' +
                          // '<a href="'+ regionData.links[i] +  '">'+
                          '<p>' + regionData.texts[i] + '</p>' +
                          '</a>'+
                        '</div>' +
                      '</div>';
    }
    contentDiv.innerHTML = contentHTML;
  } else {
    
    contentDiv.innerHTML = '해당 지역 정보 없음';
  }
}

function btnClick() {
  const defaults = document.getElementById('defaults');
  const real = document.getElementById('real');
  if(defaults.style.display != 'none') {
    defaults.style.display = 'none';
    real.style.display = 'block';
  }
}