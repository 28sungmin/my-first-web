let files = ["img/kimchi.jpg",
"img/noodle.jpg",
"img/pajen.jpg", 
"img/ramen.jpg",
"img/ddeok.jpg"];
let imgs = new Array(); // 이미지 객체를 저장할 배열
for(let i=0; i<files.length; i++) {
imgs[i] = new Image(); // 이미지 객체 생성
imgs[i].src = files[i]; // 이미지 로딩 지시
}

let next = 1;
function change(img) { // 다음 이미지 출력
img.src = imgs[next].src; // 이미지 변경
next++; // 다음 이미지에 대한 인덱스
next %= imgs.length; // 개수를 넘으면 처음으로 
}