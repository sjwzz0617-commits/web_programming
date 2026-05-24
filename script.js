const destinations = [
  {
    id: "jeju",
    name: "제주도",
    tags: ["자연", "바다", "힐링", "액티비티", "국내"],
    companions: ["커플", "친구", "가족", "혼자"],
    budgets: ["보통", "여유"],
    durations: ["1박 2일", "2박 3일 이상"],
    seasons: ["봄", "여름", "가을"],
    popularity: 98,
    costValue: 3,
    cost: "약 35만~70만원",
    schedule: "2박 3일 이상",
    spots: ["성산일출봉", "협재해변", "우도"],
    reason: "바다와 오름, 카페와 액티비티를 한 번에 즐길 수 있어 취향 폭이 넓은 여행지입니다.",
    intro: "제주도는 자연 풍경, 해안 드라이브, 감성 카페, 로컬 맛집을 모두 담을 수 있는 대표 여행지입니다.",
    course: "1일차 애월 해안도로와 카페 거리, 2일차 성산일출봉과 우도, 3일차 협재해변과 동문시장",
    food: "고기국수, 흑돼지, 해물라면, 오션뷰 카페",
    transport: "렌터카 이용이 가장 편하고, 주요 관광지는 버스 이동도 가능합니다.",
    location: "제주특별자치도 전역. 공항 기준 애월, 성산, 서귀포 방향으로 코스를 나누면 이동이 편합니다.",
    season: "봄과 가을이 가장 쾌적하며 여름에는 해수욕 중심 일정이 좋습니다.",
    tips: "인기 맛집과 렌터카는 성수기 전에 미리 예약하는 편이 좋습니다."
  },
  {
    id: "gangneung",
    name: "강릉",
    tags: ["바다", "카페", "힐링", "맛집", "국내"],
    companions: ["커플", "친구", "혼자"],
    budgets: ["저예산", "보통"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["봄", "가을", "겨울"],
    popularity: 91,
    costValue: 2,
    cost: "약 12만~28만원",
    schedule: "1박 2일",
    spots: ["안목해변", "경포호", "초당순두부마을"],
    reason: "바다 산책, 카페, 맛집 동선이 짧아 짧은 일정에도 만족도가 높습니다.",
    intro: "강릉은 바다와 카페 문화가 강한 여행지로, 주말에 가볍게 떠나기 좋습니다.",
    course: "안목해변 카페 거리, 경포호 산책, 중앙시장 먹거리, 주문진 바다 코스",
    food: "초당순두부, 장칼국수, 커피, 해산물",
    transport: "KTX 강릉역 도착 후 택시나 버스로 주요 해변 이동이 쉽습니다.",
    location: "강원특별자치도 강릉시. 안목해변, 경포호, 주문진을 한 방향으로 묶으면 좋습니다.",
    season: "사계절 모두 좋지만 맑은 가을과 겨울 바다 여행이 특히 인기가 많습니다.",
    tips: "주말 안목해변은 붐비므로 오전에 이동하면 여유롭습니다."
  },
  {
    id: "busan",
    name: "부산",
    tags: ["도시", "바다", "맛집", "쇼핑", "국내"],
    companions: ["친구", "가족", "커플"],
    budgets: ["보통", "여유"],
    durations: ["1박 2일", "2박 3일 이상"],
    seasons: ["여름", "가을", "겨울"],
    popularity: 96,
    costValue: 2,
    cost: "약 20만~45만원",
    schedule: "1박 2일",
    spots: ["해운대", "광안리", "감천문화마을"],
    reason: "대중교통으로 바다, 야경, 쇼핑, 맛집을 모두 연결하기 쉬운 도시 여행지입니다.",
    intro: "부산은 바다를 품은 대도시라 활동적인 일정과 쉬는 일정을 균형 있게 짤 수 있습니다.",
    course: "해운대 산책, 센텀시티 쇼핑, 광안리 야경, 감천문화마을과 국제시장",
    food: "돼지국밥, 밀면, 어묵, 회, 씨앗호떡",
    transport: "지하철과 버스 노선이 잘 되어 있어 차 없이 여행하기 좋습니다.",
    location: "부산광역시 해운대구, 수영구, 중구 일대. 해변권과 원도심권으로 나눠 이동하면 효율적입니다.",
    season: "여름은 해수욕, 가을과 겨울은 야경과 맛집 중심 여행에 좋습니다.",
    tips: "해운대와 광안리 숙소 가격 차이가 커서 일정 동선에 맞춰 고르는 것이 좋습니다."
  },
  {
    id: "jeonju",
    name: "전주",
    tags: ["역사/문화", "맛집", "도시", "국내"],
    companions: ["친구", "가족", "커플", "혼자"],
    budgets: ["저예산", "보통"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["봄", "가을", "겨울"],
    popularity: 84,
    costValue: 1,
    cost: "약 8만~22만원",
    schedule: "당일치기 또는 1박 2일",
    spots: ["전주한옥마을", "경기전", "남부시장"],
    reason: "한옥마을과 먹거리 동선이 가까워 저예산 여행에도 알찬 코스를 만들 수 있습니다.",
    intro: "전주는 전통 분위기와 음식 여행을 함께 즐기기 좋은 국내 대표 문화 여행지입니다.",
    course: "전주한옥마을, 경기전, 객리단길 카페, 남부시장 야시장",
    food: "비빔밥, 콩나물국밥, 막걸리 골목, 길거리 간식",
    transport: "전주역 또는 고속버스터미널에서 버스와 택시로 이동할 수 있습니다.",
    location: "전북특별자치도 전주시 완산구 한옥마을 주변. 도보 이동으로 주요 명소를 둘러보기 좋습니다.",
    season: "봄과 가을 한옥마을 산책이 좋고, 겨울에도 먹거리 여행으로 적합합니다.",
    tips: "한복 대여와 유명 식당은 주말 오후 대기 시간이 길 수 있습니다."
  },
  {
    id: "yeosu",
    name: "여수",
    tags: ["바다", "야경", "힐링", "맛집", "국내"],
    companions: ["커플", "가족", "친구"],
    budgets: ["보통", "여유"],
    durations: ["1박 2일", "2박 3일 이상"],
    seasons: ["봄", "여름", "가을"],
    popularity: 88,
    costValue: 2,
    cost: "약 18만~40만원",
    schedule: "1박 2일",
    spots: ["오동도", "해상케이블카", "낭만포차거리"],
    reason: "밤바다와 야경이 강점이라 커플 여행이나 가족 휴식 여행에 잘 맞습니다.",
    intro: "여수는 잔잔한 바다 풍경과 밤바다 감성을 중심으로 여유롭게 즐기기 좋은 여행지입니다.",
    course: "오동도 산책, 해상케이블카, 돌산공원 야경, 낭만포차거리",
    food: "게장백반, 갓김치, 해물삼합, 서대회",
    transport: "KTX 여수엑스포역에서 택시와 버스로 주요 명소 이동이 가능합니다.",
    location: "전라남도 여수시 해안권. 여수엑스포역, 오동도, 돌산공원을 연결하는 코스가 대표적입니다.",
    season: "봄, 가을에 산책하기 좋고 여름 밤바다 여행도 인기가 많습니다.",
    tips: "야경 명소는 해 질 무렵부터 붐비므로 일몰 시간을 확인하고 움직이면 좋습니다."
  },
  {
    id: "sokcho",
    name: "속초",
    tags: ["산", "바다", "자연", "맛집", "국내"],
    companions: ["친구", "가족", "커플"],
    budgets: ["저예산", "보통"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["가을", "겨울", "봄"],
    popularity: 86,
    costValue: 2,
    cost: "약 10만~30만원",
    schedule: "1박 2일",
    spots: ["설악산", "속초해변", "중앙시장"],
    reason: "산과 바다를 하루 안에 모두 볼 수 있어 자연 여행 만족도가 높습니다.",
    intro: "속초는 설악산과 동해 바다, 시장 먹거리를 함께 즐길 수 있는 균형 좋은 여행지입니다.",
    course: "설악산 케이블카, 속초해변, 영금정, 중앙시장 먹거리 투어",
    food: "닭강정, 오징어순대, 물회, 회국수",
    transport: "고속버스 이용 후 시내버스나 택시로 해변과 시장 이동이 편리합니다.",
    location: "강원특별자치도 속초시와 설악산 권역. 산 코스와 바다 코스를 반나절씩 나누기 좋습니다.",
    season: "가을 단풍철 설악산과 겨울 동해 바다가 특히 인상적입니다.",
    tips: "설악산 단풍철에는 교통 체증이 심해 이른 출발이 좋습니다."
  },
  {
    id: "yangyang",
    name: "양양",
    tags: ["바다", "액티비티", "힐링", "카페", "국내"],
    companions: ["친구", "커플", "혼자"],
    budgets: ["저예산", "보통"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["여름", "가을", "봄"],
    popularity: 82,
    costValue: 2,
    cost: "약 12만~30만원",
    schedule: "1박 2일",
    spots: ["서피비치", "낙산사", "하조대"],
    reason: "서핑과 바다 산책, 감성 카페를 짧은 일정에 담기 좋아 친구 여행에 잘 맞습니다.",
    intro: "양양은 동해 바다와 서핑 문화가 돋보이는 여행지로, 가볍게 떠나는 휴식 여행에 좋습니다.",
    course: "서피비치 산책과 서핑 체험, 낙산사 일몰, 하조대 해변과 카페 거리",
    food: "물회, 섭국, 막국수, 해변 카페",
    transport: "고속버스나 자가용 이용이 편하며, 해변 간 이동은 택시나 렌터카가 좋습니다.",
    location: "강원특별자치도 양양군 해안권. 낙산사, 하조대, 서피비치를 한 방향으로 묶기 좋습니다.",
    season: "여름에는 서핑과 해수욕, 가을에는 한적한 바다 산책이 좋습니다.",
    tips: "서핑 강습은 주말에 빨리 마감될 수 있어 미리 예약하는 편이 좋습니다."
  },
  {
    id: "gapyeong",
    name: "가평",
    tags: ["자연", "힐링", "액티비티", "카페", "국내"],
    companions: ["커플", "친구", "가족"],
    budgets: ["저예산", "보통"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["봄", "여름", "가을"],
    popularity: 80,
    costValue: 1,
    cost: "약 8만~25만원",
    schedule: "당일치기 또는 1박 2일",
    spots: ["남이섬", "아침고요수목원", "자라섬"],
    reason: "서울 근교에서 자연 산책과 액티비티를 함께 즐기기 좋아 부담 없이 다녀오기 좋습니다.",
    intro: "가평은 강과 숲, 수목원, 캠핑 감성을 가까운 거리에서 즐길 수 있는 근교 여행지입니다.",
    course: "남이섬 산책, 자라섬 피크닉, 아침고요수목원 야간 조명 또는 계절 정원",
    food: "잣두부, 닭갈비, 막국수, 브런치 카페",
    transport: "ITX 청춘과 버스를 이용하거나 자가용으로 주요 명소를 이동하기 좋습니다.",
    location: "경기도 가평군 일대. 남이섬, 자라섬, 아침고요수목원을 일정에 맞춰 나누면 좋습니다.",
    season: "봄꽃과 가을 단풍 시기가 특히 좋고, 여름에는 물놀이 일정도 인기가 많습니다.",
    tips: "주말에는 도로 정체가 잦아 오전 일찍 출발하면 일정이 편합니다."
  },
  {
    id: "seoul",
    name: "서울",
    tags: ["도시", "맛집", "쇼핑", "역사/문화", "국내"],
    companions: ["친구", "커플", "혼자", "가족"],
    budgets: ["저예산", "보통", "여유"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["봄", "가을", "겨울"],
    popularity: 94,
    costValue: 2,
    cost: "약 8만~35만원",
    schedule: "당일치기 또는 1박 2일",
    spots: ["경복궁", "코엑스", "남산타워"],
    reason: "전시, 쇼핑, 맛집, 고궁 산책까지 선택지가 많아 취향별 일정 구성이 쉽습니다.",
    intro: "서울은 전통과 최신 트렌드가 함께 있는 도시 여행지로, 짧은 일정에도 밀도 있게 즐길 수 있습니다.",
    course: "경복궁과 북촌 산책, 코엑스 쇼핑과 전시, 한강 또는 남산 야경",
    food: "광장시장 먹거리, 냉면, 디저트 카페, 한식 다이닝",
    transport: "지하철과 버스가 촘촘해 대중교통 중심 여행이 가장 편합니다.",
    location: "서울특별시 전역. 고궁권, 강남권, 성수와 한강권처럼 권역별로 묶으면 이동이 효율적입니다.",
    season: "봄 벚꽃과 가을 산책이 좋고, 겨울에는 전시와 실내 맛집 코스가 잘 맞습니다.",
    tips: "인기 전시와 식당은 사전 예약을 확인하면 대기 시간을 줄일 수 있습니다."
  },
  {
    id: "daejeon",
    name: "대전",
    tags: ["도시", "맛집", "자연", "힐링", "국내"],
    companions: ["친구", "가족", "혼자"],
    budgets: ["저예산", "보통"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["봄", "가을", "겨울"],
    popularity: 76,
    costValue: 1,
    cost: "약 7만~22만원",
    schedule: "당일치기 또는 1박 2일",
    spots: ["성심당", "한밭수목원", "엑스포과학공원"],
    reason: "교통 접근성이 좋고 빵집, 수목원, 과학공원 코스를 편하게 묶을 수 있습니다.",
    intro: "대전은 전국에서 접근하기 쉬운 도시로, 맛집과 가벼운 산책 일정을 함께 즐기기 좋습니다.",
    course: "성심당과 원도심 먹거리, 한밭수목원 산책, 엑스포과학공원과 대전신세계 주변",
    food: "튀김소보로, 칼국수, 두부두루치기, 로컬 카페",
    transport: "KTX 대전역과 지하철, 버스를 이용해 주요 지역을 이동할 수 있습니다.",
    location: "대전광역시 중구, 서구, 유성구 일대. 원도심과 둔산, 유성권을 나눠 보면 좋습니다.",
    season: "봄과 가을 수목원 산책이 좋고, 겨울에는 맛집 중심 실내 일정이 편합니다.",
    tips: "성심당 본점은 주말 대기가 길 수 있어 오전 방문이 비교적 좋습니다."
  },
  {
    id: "daegu",
    name: "대구",
    tags: ["도시", "맛집", "쇼핑", "역사/문화", "국내"],
    companions: ["친구", "커플", "혼자"],
    budgets: ["저예산", "보통"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["봄", "가을", "겨울"],
    popularity: 78,
    costValue: 1,
    cost: "약 8만~24만원",
    schedule: "1박 2일",
    spots: ["김광석거리", "서문시장", "동성로"],
    reason: "먹거리와 도심 산책, 시장 구경이 가까운 동선에 있어 짧은 여행으로도 알찹니다.",
    intro: "대구는 로컬 음식과 도심 문화, 시장 분위기를 함께 즐기기 좋은 도시 여행지입니다.",
    course: "김광석거리 산책, 동성로 카페와 쇼핑, 서문시장 야시장, 근대골목 투어",
    food: "막창, 납작만두, 따로국밥, 서문시장 간식",
    transport: "동대구역 도착 후 지하철과 버스로 도심권 이동이 편리합니다.",
    location: "대구광역시 중구와 동구 일대. 동성로, 서문시장, 김광석거리를 중심으로 묶기 좋습니다.",
    season: "봄과 가을 도보 여행이 좋고, 겨울에는 시장 먹거리 코스가 잘 맞습니다.",
    tips: "여름에는 더위가 강하므로 실내 카페와 쇼핑 일정을 함께 넣는 편이 좋습니다."
  },
  {
    id: "gwangju",
    name: "광주",
    tags: ["도시", "맛집", "역사/문화", "예술", "국내"],
    companions: ["친구", "가족", "혼자"],
    budgets: ["저예산", "보통"],
    durations: ["당일치기", "1박 2일"],
    seasons: ["봄", "가을", "겨울"],
    popularity: 77,
    costValue: 1,
    cost: "약 8만~25만원",
    schedule: "1박 2일",
    spots: ["양림동", "국립아시아문화전당", "무등산"],
    reason: "예술 산책과 남도 음식, 무등산 자연 코스를 취향에 맞게 조합하기 좋습니다.",
    intro: "광주는 문화 예술 공간과 깊은 맛의 음식 여행을 함께 즐길 수 있는 남도 도시 여행지입니다.",
    course: "양림동 역사문화마을, 국립아시아문화전당 전시, 무등산 산책, 송정역시장 먹거리",
    food: "떡갈비, 상추튀김, 오리탕, 한정식",
    transport: "광주송정역과 지하철, 버스를 이용해 도심과 주요 명소를 이동할 수 있습니다.",
    location: "광주광역시 동구, 남구, 광산구 일대. 문화전당과 양림동을 도보권으로 묶기 좋습니다.",
    season: "봄과 가을 도심 산책이 좋고, 겨울에는 전시와 음식 여행 중심 일정이 편합니다.",
    tips: "전시 일정과 시장 운영 시간을 미리 확인하면 동선 낭비를 줄일 수 있습니다."
  }
];

let selected = {};
let currentResults = [...destinations];
let favorites = [];
let booking = { train: null, hotel: null };

const trainProducts = [
  { id: "ktx-morning", category: "train", type: "KTX", time: "08:20", duration: "약 2시간", price: 42000 },
  { id: "ktx-afternoon", category: "train", type: "KTX", time: "13:10", duration: "약 2시간 10분", price: 39800 },
  { id: "itx-evening", category: "train", type: "ITX", time: "18:40", duration: "약 2시간 35분", price: 28600 },
  { id: "flight-morning", category: "flight", type: "비행기", time: "09:30", duration: "약 1시간", price: 68000 },
  { id: "flight-afternoon", category: "flight", type: "비행기", time: "15:20", duration: "약 1시간 5분", price: 72000 },
  { id: "rental-compact", category: "car", type: "소형차 렌트", time: "종일", duration: "24시간 이용", price: 55000 },
  { id: "rental-suv", category: "car", type: "SUV 렌트", time: "종일", duration: "24시간 이용", price: 82000 }
];

const hotels = [
  {
    id: "gangneung-blue",
    destination: "강릉",
    name: "블루웨이브 호텔",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=900&q=80",
    type: "오션뷰 호텔",
    rating: 4.7,
    price: 138000,
    description: "안목해변과 가까워 카페 거리와 바다 산책을 함께 즐기기 좋습니다."
  },
  {
    id: "busan-harbor",
    destination: "부산",
    name: "하버 스테이 부산",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=900&q=80",
    type: "도심 호텔",
    rating: 4.6,
    price: 126000,
    description: "광안리와 센텀 이동이 편해 친구 여행과 쇼핑 일정에 잘 맞습니다."
  },
  {
    id: "jeju-garden",
    destination: "제주도",
    name: "제주 가든 리조트",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=900&q=80",
    type: "리조트",
    rating: 4.8,
    price: 182000,
    description: "정원과 수영장이 있어 가족, 커플 힐링 여행에 어울립니다."
  },
  {
    id: "yeosu-night",
    destination: "여수",
    name: "여수 밤바다 펜션",
    image: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=900&q=80",
    type: "감성 펜션",
    rating: 4.5,
    price: 98000,
    description: "돌산대교 야경을 보기 좋고 낭만포차거리 이동도 편합니다."
  }
];

const views = {
  home: document.querySelector("#homeView"),
  results: document.querySelector("#resultsView"),
  detail: document.querySelector("#detailView"),
  favorites: document.querySelector("#favoritesView"),
  login: document.querySelector("#loginView"),
  signup: document.querySelector("#signupView"),
  train: document.querySelector("#trainView"),
  hotel: document.querySelector("#hotelView"),
  payment: document.querySelector("#paymentView")
};

const resultList = document.querySelector("#resultList");
const favoriteList = document.querySelector("#favoriteList");
const popularList = document.querySelector("#popularList");
const selectedSummary = document.querySelector("#selectedSummary");
const favoriteCount = document.querySelector("#favoriteCount");

function updateFavoriteCount() {
  favoriteCount.textContent = favorites.length;
}

function updateBookingSummary() {
  renderPaymentSummary();
}

function showView(viewName) {
  Object.values(views).forEach((view) => view.classList.remove("active"));
  views[viewName].classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (viewName === "favorites") renderFavorites();
  if (viewName === "results") renderResults();
  if (viewName === "train") renderTrainOptions();
  if (viewName === "hotel") renderHotels();
  if (viewName === "payment") renderPaymentSummary();
}

function getScore(place) {
  let score = 0;
  if (selected.theme && place.tags.includes(selected.theme)) score += 4;
  if (selected.companion && place.companions.includes(selected.companion)) score += 3;
  if (selected.budget && place.budgets.includes(selected.budget)) score += 2;
  if (selected.duration && place.durations.includes(selected.duration)) score += 2;
  if (selected.season && place.seasons.includes(selected.season)) score += 2;
  if (selected.region && place.tags.includes(selected.region)) score += 3;
  return score;
}

function recommend() {
  currentResults = destinations
    .map((place) => ({ ...place, score: getScore(place) }))
    .sort((a, b) => b.score - a.score || b.popularity - a.popularity);
}

function getChoiceSummary() {
  const values = Object.values(selected).filter(Boolean);
  return values.length ? values : ["조건을 선택하면 더 정확한 추천을 받을 수 있어요"];
}

function renderSummary() {
  selectedSummary.innerHTML = getChoiceSummary()
    .map((item) => `<span>${item}</span>`)
    .join("");
}

function makeCard(place, options = {}) {
  const isSaved = favorites.includes(place.id);
  const tags = place.tags.slice(0, 4).map((tag) => `<span class="tag">${tag}</span>`).join("");
  const deleteButton = options.favoritePage
    ? `<button class="delete-button" type="button" data-remove="${place.id}">삭제하기</button>`
    : "";

  return `
    <article class="travel-card">
      <img src="${place.image}" alt="${place.name} 대표 이미지">
      <div class="card-body">
        <div class="card-top">
          <h3>${place.name}</h3>
          <button class="favorite-button ${isSaved ? "saved" : ""}" type="button" data-favorite="${place.id}" aria-label="${place.name} 즐겨찾기">♥</button>
        </div>
        <div class="tags">${tags}</div>
        <p class="reason">${place.reason}</p>
        <div class="meta-list">
          <span>예상 비용: ${place.cost}</span>
          <span>추천 일정: ${place.schedule}</span>
          <span>대표 명소: ${place.spots.join(", ")}</span>
        </div>
        <button class="detail-button" type="button" data-detail="${place.id}">상세 보기</button>
        ${deleteButton}
      </div>
    </article>
  `;
}

function getFilteredResults() {
  const keyword = document.querySelector("#searchInput").value.trim().toLowerCase();
  const budget = document.querySelector("#budgetFilter").value;
  const theme = document.querySelector("#themeFilter").value;
  const sort = document.querySelector("#sortSelect").value;

  let list = currentResults.filter((place) => {
    const keywordMatch = !keyword || place.name.toLowerCase().includes(keyword) || place.tags.join(" ").toLowerCase().includes(keyword);
    const budgetMatch = !budget || place.budgets.includes(budget);
    const themeMatch = !theme || place.tags.includes(theme);
    return keywordMatch && budgetMatch && themeMatch;
  });

  if (sort === "popular") list = list.sort((a, b) => b.popularity - a.popularity);
  if (sort === "cost") list = list.sort((a, b) => a.costValue - b.costValue || b.popularity - a.popularity);
  if (sort === "recommend") list = list.sort((a, b) => (b.score || 0) - (a.score || 0) || b.popularity - a.popularity);

  return list;
}

function renderResults() {
  renderSummary();
  const list = getFilteredResults();
  resultList.innerHTML = list.length
    ? list.map((place) => makeCard(place)).join("")
    : `<div class="empty">조건에 맞는 여행지가 없습니다. 검색어 또는 필터를 바꿔보세요.</div>`;
  updateFavoriteCount();
}

function renderPopular() {
  popularList.innerHTML = [...destinations]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 3)
    .map((place) => makeCard(place))
    .join("");
}

function renderFavorites() {
  const savedPlaces = destinations.filter((place) => favorites.includes(place.id));
  favoriteList.innerHTML = savedPlaces.length
    ? savedPlaces.map((place) => makeCard(place, { favoritePage: true })).join("")
    : `<div class="empty">아직 저장한 여행지가 없습니다. 마음에 드는 여행지를 즐겨찾기에 추가해보세요.</div>`;
  updateFavoriteCount();
}

function formatWon(price) {
  return `${price.toLocaleString("ko-KR")}원`;
}

function getTrainSearchInfo() {
  return {
    transportType: document.querySelector("#transportType").value,
    departure: document.querySelector("#departureStation").value,
    arrival: document.querySelector("#arrivalStation").value,
    date: document.querySelector("#trainDate").value || "날짜 미정",
    passengers: Number(document.querySelector("#passengerCount").value)
  };
}

function updatePassengerOptions() {
  const transportType = document.querySelector("#transportType").value;
  const label = document.querySelector("#passengerLabel");
  const select = document.querySelector("#passengerCount");
  const unit = transportType === "car" ? "대" : "명";

  label.firstChild.textContent = transportType === "car" ? "차량 수" : "인원";
  select.innerHTML = [1, 2, 3, 4]
    .map((count) => `<option value="${count}">${count}${unit}</option>`)
    .join("");
}

function renderTrainOptions() {
  const list = document.querySelector("#trainOptions");
  if (!list) return;

  const search = getTrainSearchInfo();
  const filteredProducts = trainProducts.filter((train) => train.category === search.transportType);

  list.innerHTML = filteredProducts.map((train) => {
    const total = train.price * search.passengers;
    const selectedClass = booking.train && booking.train.id === train.id ? "selected" : "";

    return `
      <article class="option-card ${selectedClass}">
        <h3>${train.type} ${train.time}</h3>
        <p>${search.departure} → ${search.arrival}</p>
        <p>${search.date} · ${search.passengers}${search.transportType === "car" ? "대" : "명"} · ${train.duration}</p>
        <strong class="price">${formatWon(total)}</strong>
        <button class="select-button" type="button" data-train="${train.id}">선택하기</button>
      </article>
    `;
  }).join("");
}

function selectTrain(id) {
  const train = trainProducts.find((item) => item.id === id);
  if (!train) return;

  const search = getTrainSearchInfo();
  booking.train = {
    ...train,
    departure: search.departure,
    arrival: search.arrival,
    date: search.date,
    passengers: search.passengers,
    total: train.price * search.passengers
  };
  updateBookingSummary();
  renderTrainOptions();
}

function getHotelFilters() {
  return {
    destination: document.querySelector("#hotelDestination").value,
    checkin: document.querySelector("#checkinDate").value || "체크인 미정",
    nights: Number(document.querySelector("#nightCount").value),
    sort: document.querySelector("#hotelSort").value
  };
}

function renderHotels() {
  const list = document.querySelector("#hotelList");
  if (!list) return;

  const filters = getHotelFilters();
  let hotelList = hotels.filter((hotel) => !filters.destination || hotel.destination === filters.destination);

  if (filters.sort === "price") hotelList = hotelList.sort((a, b) => a.price - b.price);
  if (filters.sort === "rating") hotelList = hotelList.sort((a, b) => b.rating - a.rating);
  if (filters.sort === "recommend") hotelList = hotelList.sort((a, b) => b.rating - a.rating || a.price - b.price);

  list.innerHTML = hotelList.length
    ? hotelList.map((hotel) => {
      const total = hotel.price * filters.nights;
      const selectedClass = booking.hotel && booking.hotel.id === hotel.id ? "selected" : "";

      return `
        <article class="hotel-card ${selectedClass}">
          <img src="${hotel.image}" alt="${hotel.name} 이미지">
          <h3>${hotel.name}</h3>
          <p>${hotel.destination} · ${hotel.type}</p>
          <p class="rating">평점 ${hotel.rating}</p>
          <p>${hotel.description}</p>
          <strong class="price">${formatWon(total)}</strong>
          <button class="select-button" type="button" data-hotel="${hotel.id}">이 숙소 선택</button>
        </article>
      `;
    }).join("")
    : `<div class="empty">조건에 맞는 숙소가 없습니다.</div>`;
}

function selectHotel(id) {
  const hotel = hotels.find((item) => item.id === id);
  if (!hotel) return;

  const filters = getHotelFilters();
  booking.hotel = {
    ...hotel,
    checkin: filters.checkin,
    nights: filters.nights,
    total: hotel.price * filters.nights
  };
  updateBookingSummary();
  renderHotels();
}

function renderPaymentSummary() {
  const summary = document.querySelector("#bookingSummary");
  const totalPrice = document.querySelector("#totalPrice");
  if (!summary || !totalPrice) return;

  const items = [];
  let total = 0;

  if (booking.train) {
    total += booking.train.total;
    items.push(`
      <div class="summary-item">
        <strong>이동수단 예약</strong>
        <p>${booking.train.type} ${booking.train.time}</p>
        <p>${booking.train.departure} → ${booking.train.arrival}</p>
        <p>${booking.train.date} · ${booking.train.passengers}명</p>
        <p>${formatWon(booking.train.total)}</p>
      </div>
    `);
  }

  if (booking.hotel) {
    total += booking.hotel.total;
    items.push(`
      <div class="summary-item">
        <strong>숙소 예약</strong>
        <p>${booking.hotel.name}</p>
        <p>${booking.hotel.destination} · ${booking.hotel.checkin} · ${booking.hotel.nights}박</p>
        <p>${formatWon(booking.hotel.total)}</p>
      </div>
    `);
  }

  summary.innerHTML = items.length
    ? items.join("")
    : `<div class="summary-item"><strong>선택된 예약 없음</strong><p>이동수단 또는 숙소를 선택하면 이곳에 표시됩니다.</p></div>`;
  totalPrice.textContent = formatWon(total);
}

function getRecommendedHotels(destination) {
  return hotels
    .filter((hotel) => hotel.destination === destination)
    .sort((a, b) => b.rating - a.rating || a.price - b.price);
}

function makeDetailHotelCard(hotel) {
  const selectedClass = booking.hotel && booking.hotel.id === hotel.id ? "selected" : "";

  return `
    <article class="detail-hotel-card ${selectedClass}">
      <img src="${hotel.image}" alt="${hotel.name} 이미지">
      <div>
        <h3>${hotel.name}</h3>
        <p>${hotel.destination} · ${hotel.type}</p>
        <p class="rating">평점 ${hotel.rating}</p>
        <p>${hotel.description}</p>
        <strong class="price">${formatWon(hotel.price)} / 1박</strong>
        <button class="select-button" type="button" data-hotel="${hotel.id}">이 숙소 선택</button>
      </div>
    </article>
  `;
}

const attractionDescriptions = {
  "성산일출봉": "유네스코 세계자연유산으로 지정된 제주의 대표 명소이며, 정상에서 바라보는 일출과 바다 풍경이 유명합니다.",
  "협재해변": "맑은 에메랄드빛 바다와 비양도 풍경을 함께 볼 수 있는 제주 서쪽의 인기 해변입니다.",
  "우도": "제주 동쪽에서 배로 들어가는 섬으로 해안도로, 검멀레해변, 땅콩 아이스크림으로 잘 알려져 있습니다.",
  "안목해변": "강릉 커피거리와 맞닿아 있어 바다 산책과 카페 투어를 함께 즐기기 좋은 해변입니다.",
  "경포호": "잔잔한 호수 산책로와 벚꽃길로 유명하며 경포해변과 함께 둘러보기 좋은 강릉 명소입니다.",
  "초당순두부마을": "강릉의 대표 먹거리 골목으로 부드러운 순두부 요리와 지역 맛집을 즐길 수 있습니다.",
  "해운대": "부산을 대표하는 해변으로 넓은 백사장, 고층 빌딩 야경, 주변 맛집 접근성이 좋습니다.",
  "광안리": "광안대교 야경을 가까이 볼 수 있는 해변으로 저녁 산책과 카페, 식당 코스가 인기가 많습니다.",
  "감천문화마을": "알록달록한 집과 골목길 전망이 특징인 부산의 문화마을로 사진 찍기 좋은 명소입니다.",
  "전주한옥마을": "전통 한옥이 모여 있는 전주의 대표 관광지로 한복 체험과 길거리 음식을 함께 즐길 수 있습니다.",
  "경기전": "조선 태조 어진을 모신 역사 공간으로 전주한옥마을과 함께 둘러보기 좋은 문화유산입니다.",
  "남부시장": "전주 먹거리와 야시장 분위기를 느낄 수 있는 시장으로 한옥마을 여행 동선에 넣기 좋습니다.",
  "오동도": "동백나무와 해안 산책로가 유명한 여수의 대표 섬 관광지입니다.",
  "해상케이블카": "여수 바다와 돌산대교 일대를 공중에서 내려다볼 수 있는 인기 체험 코스입니다.",
  "낭만포차거리": "여수 밤바다 분위기와 해산물 요리를 함께 즐길 수 있는 야간 명소입니다.",
  "설악산": "속초와 인접한 국립공원으로 웅장한 산세, 단풍, 케이블카 코스가 유명합니다.",
  "속초해변": "동해 바다를 가까이 즐길 수 있는 속초 대표 해변으로 중앙시장과 함께 방문하기 좋습니다.",
  "중앙시장": "속초 먹거리 여행의 중심지로 닭강정, 오징어순대, 해산물 간식을 맛볼 수 있습니다.",
  "서피비치": "양양의 서핑 문화가 잘 드러나는 해변으로 이국적인 분위기와 해변 카페가 인기입니다.",
  "낙산사": "동해를 내려다보는 사찰로 의상대와 해수관음상 풍경이 인상적인 양양 명소입니다.",
  "하조대": "기암절벽과 정자, 해변 풍경이 어우러진 양양의 대표 해안 전망지입니다.",
  "남이섬": "나무길과 강변 산책로가 유명한 가평 대표 관광지로 계절마다 다른 풍경을 즐길 수 있습니다.",
  "아침고요수목원": "잘 가꾼 정원과 계절 축제가 있는 수목원으로 산책과 사진 촬영에 좋습니다.",
  "자라섬": "북한강변에 있는 섬으로 축제, 캠핑, 피크닉 장소로 잘 알려져 있습니다.",
  "경복궁": "조선 왕궁의 중심 공간으로 광화문, 근정전, 수문장 교대식 등을 볼 수 있는 서울 대표 고궁입니다.",
  "코엑스": "쇼핑몰, 전시관, 아쿠아리움, 별마당도서관이 모여 있는 강남의 복합 문화 공간으로 실내 데이트와 쇼핑 코스로 인기가 많습니다.",
  "남산타워": "서울 도심 전경을 한눈에 볼 수 있는 전망 명소로 야경 코스로 인기가 많습니다.",
  "성심당": "대전을 대표하는 빵집으로 튀김소보로와 다양한 베이커리 메뉴가 유명합니다.",
  "한밭수목원": "도심 속 넓은 녹지와 산책로를 갖춘 대전의 대표 휴식 공간입니다.",
  "엑스포과학공원": "대전 엑스포의 흔적과 과학 테마 공간을 볼 수 있는 가족 여행 명소입니다.",
  "김광석거리": "가수 김광석을 테마로 한 벽화와 음악 분위기를 느낄 수 있는 대구의 문화 거리입니다.",
  "서문시장": "대구의 대표 전통시장으로 야시장과 다양한 먹거리가 유명합니다.",
  "동성로": "대구의 중심 번화가로 쇼핑, 카페, 맛집을 한 번에 즐기기 좋습니다.",
  "양림동": "근대 건축물과 골목 산책 코스가 있는 광주의 역사문화 동네입니다.",
  "국립아시아문화전당": "전시, 공연, 문화 행사가 열리는 광주의 대표 복합문화공간입니다.",
  "무등산": "광주를 대표하는 산으로 등산과 전망, 계절 자연 풍경을 즐기기 좋은 명소입니다."
};

function getAttractionDescription(place, spot) {
  return attractionDescriptions[spot] || `${place.name} 여행에서 함께 둘러보기 좋은 추천 관광지입니다.`;
}

function getNaverMapSearchUrl(place, spot) {
  return `https://map.naver.com/p/search/${encodeURIComponent(`${place.name} ${spot}`)}`;
}

function makeAttractionCard(place, spot, index) {
  const attractionId = `${place.id}-attraction-${index + 1}`;
  const mapUrl = getNaverMapSearchUrl(place, spot);

  return `
    <article class="detail-attraction-card">
      <div class="attraction-frame-wrap">
        <iframe
          class="attraction-frame"
          title="${place.name} ${spot} 이미지 영역"
          src="about:blank"
          data-image-file=""
          data-map-url="${mapUrl}">
        </iframe>
        <span class="attraction-image-slot">이미지 넣는 곳: ${attractionId}</span>
      </div>
      <div class="attraction-card-body">
        <h3>${spot}</h3>
        <p>${getAttractionDescription(place, spot)}</p>
        <div class="attraction-actions">
          <a href="${mapUrl}" target="_blank" rel="noopener" data-attraction-map="${attractionId}">위치 보기</a>
        </div>
      </div>
    </article>
  `;
}

function renderDetail(id) {
  const place = destinations.find((item) => item.id === id);
  if (!place) return;
  const isSaved = favorites.includes(place.id);
  const recommendedHotels = getRecommendedHotels(place.name);

  document.querySelector("#detailContent").innerHTML = `
    <div class="detail-hero">
      <img src="${place.image}" alt="${place.name} 풍경">
      <div class="detail-main">
        <div class="detail-title-row">
          <div>
            <p class="eyebrow">Destination Detail</p>
            <h1>${place.name}</h1>
            <p class="detail-intro">${place.intro}</p>
          </div>
          <button class="favorite-button ${isSaved ? "saved" : ""}" type="button" data-favorite="${place.id}" aria-label="${place.name} 즐겨찾기">♥</button>
        </div>
        <div class="tags">${place.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}</div>
        <div class="info-grid">
          <section class="info-box">
            <h3>추천 코스</h3>
            <p>${place.course}</p>
          </section>
          <section class="info-box">
            <h3>맛집/카페</h3>
            <p>${place.food}</p>
          </section>
          <section class="info-box">
            <h3>교통 정보</h3>
            <p>${place.transport}</p>
          </section>
          <section class="info-box">
            <h3>지도 또는 위치 정보</h3>
            <p>${place.location}</p>
          </section>
          <section class="info-box">
            <h3>예상 경비</h3>
            <p>${place.cost}</p>
          </section>
          <section class="info-box">
            <h3>방문하기 좋은 계절</h3>
            <p>${place.season}</p>
          </section>
          <section class="info-box">
            <h3>주의사항 또는 팁</h3>
            <p>${place.tips}</p>
          </section>
        </div>
        <section class="detail-attraction-tab">
          <div class="detail-tab-head">
            <span>추천 관광지</span>
          </div>
          <div class="detail-attraction-list">
            ${place.spots.map((spot, index) => makeAttractionCard(place, spot, index)).join("")}
          </div>
        </section>
        <section class="detail-hotel-tab">
          <div class="detail-tab-head">
            <span>추천 숙소</span>
          </div>
          <div class="detail-hotel-list">
            ${recommendedHotels.length
              ? recommendedHotels.map((hotel) => makeDetailHotelCard(hotel)).join("")
              : `<div class="empty">아직 등록된 추천 숙소가 없습니다.</div>`}
          </div>
        </section>
      </div>
    </div>
  `;

  showView("detail");
}

function toggleFavorite(id) {
  favorites = favorites.includes(id)
    ? favorites.filter((item) => item !== id)
    : [...favorites, id];
  updateFavoriteCount();
  renderResults();
  renderFavorites();
  const activeDetail = document.querySelector("#detailView.active");
  if (activeDetail) renderDetail(id);
}

document.querySelector("#preferenceForm").addEventListener("click", (event) => {
  const button = event.target.closest(".choice-row button");
  if (!button) return;

  const group = button.closest(".option-group");
  group.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
  button.classList.add("selected");
  selected[group.dataset.name] = button.dataset.value;
});

document.querySelector("#preferenceForm").addEventListener("submit", (event) => {
  event.preventDefault();
  recommend();
  showView("results");
});

document.querySelector("#resetChoices").addEventListener("click", () => {
  selected = {};
  document.querySelectorAll(".choice-row button").forEach((button) => button.classList.remove("selected"));
  recommend();
});

document.body.addEventListener("click", (event) => {
  const viewButton = event.target.closest("[data-view]");
  const favoriteButton = event.target.closest("[data-favorite]");
  const detailButton = event.target.closest("[data-detail]");
  const removeButton = event.target.closest("[data-remove]");
  const trainButton = event.target.closest("[data-train]");
  const hotelButton = event.target.closest("[data-hotel]");

  if (viewButton) showView(viewButton.dataset.view);
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
  if (detailButton) renderDetail(detailButton.dataset.detail);
  if (removeButton) {
    favorites = favorites.filter((id) => id !== removeButton.dataset.remove);
    renderFavorites();
    renderResults();
  }
  if (trainButton) selectTrain(trainButton.dataset.train);
  if (hotelButton) {
    const isDetailHotel = Boolean(hotelButton.closest("#detailView"));
    selectHotel(hotelButton.dataset.hotel);
    if (isDetailHotel) alert("선택하신 숙소가 장바구니에 담겼습니다.");
  }
});

["#searchInput", "#budgetFilter", "#themeFilter", "#sortSelect"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", renderResults);
});

document.querySelector("#transportType").addEventListener("input", () => {
  updatePassengerOptions();
  renderTrainOptions();
});

["#departureStation", "#arrivalStation", "#trainDate", "#passengerCount"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", renderTrainOptions);
});

["#hotelDestination", "#checkinDate", "#nightCount", "#hotelSort"].forEach((selector) => {
  document.querySelector(selector).addEventListener("input", renderHotels);
});

document.querySelector("#loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const id = document.querySelector("#loginEmail").value.trim();
  const password = document.querySelector("#loginPassword").value.trim();

  if (!id || !password) {
    alert("아이디와 비밀번호를 모두 입력해주세요.");
    return;
  }

  alert("로그인되었습니다.");
});

document.querySelector("#signupForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = document.querySelector("#signupEmail");
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    alert("이메일 형식이 올바르지 않습니다.");
    emailInput.focus();
    return;
  }

  alert("회원가입이 완료되었습니다.");
});

document.querySelector("#payerPhone").addEventListener("input", (event) => {
  const numbers = event.target.value.replace(/[^0-9]/g, "").slice(0, 11);

  if (numbers.length <= 3) {
    event.target.value = numbers;
  } else if (numbers.length <= 7) {
    event.target.value = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
  } else {
    event.target.value = `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7)}`;
  }
});

document.querySelector("#paymentForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const message = document.querySelector("#paymentMessage");
  const total = (booking.train?.total || 0) + (booking.hotel?.total || 0);

  if (!total) {
    message.textContent = "장바구니에 담을 이동수단이나 숙소를 먼저 선택해주세요.";
    return;
  }

  const payer = document.querySelector("#payerName").value.trim();
  const method = document.querySelector("#paymentMethod").value;
  message.textContent = `${payer}님의 ${method} 주문이 완료되었습니다. 총 금액은 ${formatWon(total)}입니다.`;
});

function setDefaultDates() {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  document.querySelector("#trainDate").value = tomorrow.toISOString().slice(0, 10);
  document.querySelector("#checkinDate").value = dayAfterTomorrow.toISOString().slice(0, 10);
}

setDefaultDates();
recommend();
renderPopular();
renderResults();
updatePassengerOptions();
renderTrainOptions();
renderHotels();
renderPaymentSummary();
updateFavoriteCount();
