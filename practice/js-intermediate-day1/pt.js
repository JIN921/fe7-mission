// var 로 선언하면 for문을 위해 선언한 변수가 외부에서 참조 가능함..
for (var a = 0; a < 5; a++) {
  console.log(a);
}

console.log("?? :", a); // 값을 가져와버림..

// 반대로 let 키워드로 선언하면
for (let b = 0; b < 5; b++) {
  console.log(b); // 여기서만 b 변수 참조 가능
}

//nsole.log("!! :", b); // 여기서는 b 변수 참조 불가능(이게 정상이지)

function Test() {
  var tt1 = 0;
}
if (true) {
  var tt = 1;
}

console.log(tt1, tt);
