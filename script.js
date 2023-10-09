// // span 요소 노드 가져오기
// const spanE1 = document.querySelector("main h2 span");
// //화면에 표시할 문장 배열
// const txtArr = ['Web publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
// //배열의 인덱스 초기값 0이면 web을 가져오고 1은 front를 가져옴 배열 순서임
// let index = 0;
// //화면에 표시할 문장 배열에서 요소를 하나 가져온 뒤, 배열로 만들기
// let currenTxt = txtArr[index].split("");

// console.log(currenTxt)

// //입력효과구현
// function writeTxt() {
//     spanE1.textContent += currenTxt.shift(); //쉬프트는 파괴적 메서드..맨 앞의 요소 추출하고 추출한 요소를 원본배열에서 삭제
//     if (currenTxt.length !== 0) {
//         setTimeout(writeTxt, Math.floor(Math.random() * 100));
//     // 배열의 길이가 0인지 확인하고 0이 아니면 모두 출력할때까지 추출삭제를 반복하기 위해서
//     } else {
//         currenTxt = spanE1.text(Content.split("")); //
//         setTimeout(deleteTxt, 3000);
//     }
// }
// writeTxt()

// //삭제효과구현
// function deleteTxt() {
//     currenTxt.pop(); //배열요소를 끝에서 부터 한개씩 삭제 원본 배열요소가 삭제..변수에는 끝에서 하나가 삭제
//     spanE1.textContent = currenTxt.join(""); // 배열의 원본을 다시 합쳐서 실제로는 한글자가 삭제된것처럼 보임
//     if (currenTxt.length !== 0) {
//         setTimeout(deleteTxt, Math.floor(Math.random() * 100)) 
//     } else {
//         index = (index + 1) % txtArr.length;
//         currenTxt = txtArr[index].split("");
//         writeTxt();
//     }//모든 배열이 삭제되면 else 문 실행됨 출력하기 위해 배열에 다시 접근하고 index 숫자를 증가시키는데 그 이유는 배열의(txtArr)길이를
//     //넘지 않게 하기 위해서임.
// }   


//타이핑 효과 개선하기 (위에는 한번 하면 끝나는데 즉시실행함수형태로 감싸주면 코드를 좀 더 정리가능 계속 해서 글이 바뀜)

(function () {
    const spanE1 = document.querySelector("main h2 span");
    const txtArr = ['Web publisher', 'Front-End Developer', 'Web UI Designer', 'UX Designer', 'Back-End Developer'];
    let index = 0;
    let currentTxt = txtArr[index].split("");

    function writeTxt() {
        spanE1.textContent += currentTxt.shift();

        if (currentTxt.length !== 0) {
            setTimeout(writeTxt, Math.floor(Math.random() * 100));
        } else {
            setTimeout(deleteTxt, 3000);
        }
    }

    function deleteTxt() {
        currentTxt.pop();
        spanE1.textContent = currentTxt.join("");

        if (currentTxt.length !== 0) {
            setTimeout(deleteTxt, Math.floor(Math.random() * 100));
        } else {
            index = (index + 1) % txtArr.length;
            currentTxt = txtArr[index].split("");
            writeTxt();
        }
    }

    writeTxt();
})();

/* scroll.js */
// const headerEl = document.querySelector("header");
// window.addEventListener('scroll', function(){
//   const browerScrollY = window.pageYOffset;
//   if(browerScrollY > 0){
//     headerEl.classList.add("active");
//   }else{
//     headerEl.classList.remove("active");
//   }
// });

/* End scroll.js */

/* 수직 스크롤이 발생하면 header 태그에 active 클래스 추가 및 삭제 */
const headerEl = document.querySelector("header");
window.addEventListener('scroll', function(){
  requestAnimationFrame(scrollCheck);
});
function scrollCheck(){
  let browerScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
  if(browerScrollY > 0){
    headerEl.classList.add("active");
  }else{
    headerEl.classList.remove("active");
  }
}

//부드러운 이동 애니 구현
const aimationMove = function (selector) {
    //매개변수로 이동할 대상 요소 노드 가져오기
    const targetE1 = document.querySelector(selector);
    //현재 웹 브라우저의 스크롤 정보 (Y값)
    const browerScrollY = window.pageXOffset;
    //이동할 대상의 위치 (Y값)
    const targetScorlly = targetE1.getBoundingClienRect().top + browerScrollY;
    //스크롤 이동
    window.scrollTo({ top: targetScorlly, behavior: 'smooth' });
};

//스크롤 이벤트 연결
const scollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']");
for (let i = 0; i < scollMoveE1.length; i++){
    scollMoveE1[i].addEventListener('click', function (e) {
        const target = this.dataset.target;
        aimationMove(target);
    });
}

