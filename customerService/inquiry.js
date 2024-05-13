// html을 open하면 실행되는 함수
document.addEventListener('DOMContentLoaded',()=>{
    checkLogin(); // 로그인 여부 확인 함수
});

// 로그인 여부 확인 함수
function checkLogin(){
    console.log(localStorage.getItem('checkLogin'));
    if(localStorage.getItem('checkLogin') == 'isTrue'){
        document.getElementById('topBar1').innerHTML =
        `<a href="inquiry.html" id=topBar4>
            <i class="bi bi-unlock-fill"></i>
            <span>로그아웃</span>
        </a>`;
        document.getElementById('topBar2').innerHTML =
        `<a href="#">
            <i class="bi bi-person"></i>
            <span>${localStorage.getItem('registeredName')}님</span>
        </a>`;
        document.getElementById('topBar3').innerHTML =
        `<a href="../mypage/mypage.html">
            <i class="bi bi-person"></i>
            <span>마이페이지</span>
        </a>`;
        document.getElementById('topBar4').addEventListener('click',()=>{
            localStorage.setItem('checkLogin', 'isFalse');
        });
    }else{
        document.getElementById('topBar1').innerHTML =
        `<a href="../login/login.html" id="topBar1">
            <i class="bi bi-lock-fill"></i>
            <span>로그인</span>
        </a>`;
        document.getElementById('topBar2').innerHTML =
        `<a href="../signUp/signUp.html" id="topBar2">
            <i class="bi bi-person-plus"></i>
            <span>회원가입</span>
        </a>`;
        document.getElementById('topBar3').innerHTML =
        `<a href="../login/login.html" id="topBar3">
            <i class="bi bi-person"></i>
            <span>마이페이지</span>
        </a>`;
    }
}

// 개인정보 수집에 대한 동의 아이콘 체크 표시 로직
document.getElementById('label_1').addEventListener('click',checkIconChange);
document.getElementById('span_1').addEventListener('click',checkIconChange);
function checkIconChange(){
    let checkIcon = document.getElementById('span_1');
    if (checkIcon.innerHTML === `<i class="bi bi-check-circle"></i>`) {
        checkIcon.innerHTML = `<i class="bi bi-check-circle-fill"></i>`;
    } else {
        checkIcon.innerHTML = `<i class="bi bi-check-circle"></i>`;
    }
}

// select_1와 select_2의 초기 상태 저장 변수
let initialSelect1Value = document.getElementById('select_1').value;
let initialSelect2Options = Array.from(document.getElementById('select_2').options);

// 극장별문의 누르면 극장선택 활성화,비활성화 로직
document.getElementById('radio_2').addEventListener('click',select_1_on);
document.getElementById('radio_1').addEventListener('click',select_1_off);

function select_1_on(){
document.getElementById('select_1').disabled = false;
}

function select_1_off(){
let select1 = document.getElementById('select_1');
let select2 = document.getElementById('select_2');

// select1과 select2를 초기 상태로 되돌리기
select1.value = initialSelect1Value;
select2.innerHTML = '';
initialSelect2Options.forEach(function (option){
    addOption(select2, option.text);
})

// selectBox 비활성화
document.getElementById('select_1').disabled = true;
document.getElementById('select_2').disabled = true;
}
// 개인정보 수집에 대한 동의 아이콘 체크 표시 로직 끝


// 극장선택에 따라 극장선택의 List들이 변하는 로직
document.getElementById('select_1').addEventListener('change',updateSelect2);
function addOption(selectElement, text){
    var option = document.createElement('option');
    option.text = text;
    selectElement.add(option);
}
function updateSelect2(){
    var select1 = document.getElementById('select_1');
    var select2 = document.getElementById('select_2');
    select2.innerHTML = '';

    if(select1.value == '1'){
        addOption(select2, '지점선택');
        addOption(select2, '강남');
        addOption(select2, '홍대');
        addOption(select2, '신촌');
    }else if(select1.value == '2'){
        addOption(select2, '지점선택');
        addOption(select2, '동탄');
        addOption(select2, '수원');
        addOption(select2, '일산');
    }else if(select1.value == '3'){
        addOption(select2, '지점선택');
        addOption(select2, '검단');
        addOption(select2, '송도');
        addOption(select2, '논현');
    }else if(select1.value == '4'){
        addOption(select2, '지점선택');
        addOption(select2, '대전');
        addOption(select2, '세종');
        addOption(select2, '천안');
    }else if(select1.value == '5'){
        addOption(select2, '지점선택');
        addOption(select2, '부산');
        addOption(select2, '포항');
        addOption(select2, '울산');
    }else if(select1.value == '6'){
        addOption(select2, '지점선택');
        addOption(select2, '순천');
        addOption(select2, '여수');
        addOption(select2, '전주');
    }else if(select1.value == '7'){
        addOption(select2, '지점선택');
        addOption(select2, '속초');
        addOption(select2, '원주');
        addOption(select2, '춘천');
    }else if(select1.value == '8'){
        addOption(select2, '지점선택');
        addOption(select2, '삼화');
        addOption(select2, '서귀포');
    }else{
        addOption(select2, '지점선택');
    }
    // 활성화
    select2.disabled = false;
}
// 극장선택에 따라 극장선택의 List들이 변하는 로직 끝    

// 고객 문의 사항 등록,수정,삭제 관련 로직 집합
let arrayQuestion = [];
let modifyIndex = -1;
// '등록' 버튼에 대한 클릭 이벤트 리스너
    document.getElementById('insertBtn').addEventListener('click',()=>{
        let choice = window.confirm('문의 사항을 등록 하시겠습니까?');

        if(choice){ // confirm 창 확인을 누르면
            // 문의 사항 목록 div 창 출력
            document.getElementById('question').innerText = '< 문의 사항 목록 >';
            // 입력값 수집
            let name = document.getElementById('이름').value;
            let email = document.getElementById('이메일').value;
            let phone1 = document.getElementById('휴대전화1').value;
            let phone2 = document.getElementById('휴대전화2').value;
            let phone3 = document.getElementById('휴대전화3').value;
            let title = document.getElementById('제목').value;
            let content = document.getElementById('내용').value;
            let password = document.getElementById('비밀번호').value;

            // 새로운 객체 생성
            let entry = {
                eName: name,
                eEmail: email,
                ePhone1: phone1,
                ePhone2: phone2,
                ePhone3: phone3,
                eTitle: title,
                eContent: content,
                ePassword: password
            };

            // 완성된 객체를 문의 사항 목록 배열에 추가
            arrayQuestion.push(entry);

            // 문의 사항 목록을 화면에 출력
            printQuestion();

            // list로 스크롤 이동
            document.getElementById('list').scrollIntoView({behavior:"smooth"});

            // table 초기화
            tableIni();
        }else{ // confirm 창 취소를 누르면
            return;
        }
    })

// list에 화면을 출력하는 함수
function printQuestion(){
    let tmpText = '';
    
    for (let i = 0; i < arrayQuestion.length; i++) {
        const element = arrayQuestion[i];
        tmpText += `<li class="li_me"><p><span class="liTitle" id="liTitle">[ ${i+1} ] ${element.eTitle}</span><i class="bi bi-x-square deleteBtn" id="deleteBtn${i}"></i><i class="bi bi-pencil-square editBtn" id="editBtn${i}"></i></p></li>`;
    }
    document.getElementById('list').innerHTML = tmpText;

    // 게시글 클릭 이벤트 리스너
    document.querySelectorAll('.liTitle').forEach((liTitle, index) => {
        liTitle.addEventListener('click', () => {
            openEditPopupLiTitle();
            let obj = arrayQuestion[index];
            fillPopupLiTitle(obj);
        })
        
    });

    // '수정' 버튼에 대한 이벤트 리스너 설정
    document.querySelectorAll('.editBtn').forEach((editBtn, index) => {
        editBtn.addEventListener('click', () => {
            let choice1 = window.confirm('수정 하시겠습니까?');

            if (choice1) {
            openEditPopup();
            modifyIndex = index;
            let obj = arrayQuestion[index];
                fillPopup(obj);
            } else {
                return;
            }
        });
    })
    // '삭제' 버튼에 대한 이벤트 리스너 설정
    document.querySelectorAll('.deleteBtn').forEach((deleteBtn, index) => {
        deleteBtn.addEventListener('click', () => {
            let choice2 = window.confirm('삭제 하시겠습니까?')
            if (choice2) {
                arrayQuestion.splice(index, 1);
                printQuestion();
            } else {
                return;
            }
        });
    });
}

// table 내부의 입력 값을 초기화 하는 함수
function tableIni(){
    document.getElementById('이름').value = '';
    document.getElementById('이메일').value = '';
    document.getElementById('휴대전화1').value = '';
    document.getElementById('휴대전화2').value = '';
    document.getElementById('휴대전화3').value = '';
    document.getElementById('제목').value = '';
    document.getElementById('내용').value = '';
    document.getElementById('비밀번호').value = '';
}
// 고객 문의 사항 등록,수정,삭제 관련 로직 집합 끝

// 수정 버튼을 누르면 팝업창 열기
function openEditPopup(){
    const editPopup = document.getElementById('editPopup');
    editPopup.style.display = 'block';
}

// 게시글을 누르면 팝업창 열기
function openEditPopupLiTitle(){
    const editPopup = document.getElementById('editPopupLiTitle');
    editPopup.style.display = 'block';
}

// 팝업창 내용 채우기
function fillPopup(obj){
    document.getElementById('이름popup').value = obj.eName;
    document.getElementById('이메일popup').value = obj.eEmail;
    document.getElementById('휴대전화1popup').value = obj.ePhone1;
    document.getElementById('휴대전화2popup').value = obj.ePhone2;
    document.getElementById('휴대전화3popup').value = obj.ePhone3;
    document.getElementById('제목popup').value = obj.eTitle;
    document.getElementById('내용popup').value = obj.eContent;
}

function fillPopupLiTitle(obj){
    document.getElementById('이름popupLiTitle').value = obj.eName;
    document.getElementById('이메일popupLiTitle').value = obj.eEmail;
    document.getElementById('휴대전화1popupLiTitle').value = obj.ePhone1;
    document.getElementById('휴대전화2popupLiTitle').value = obj.ePhone2;
    document.getElementById('휴대전화3popupLiTitle').value = obj.ePhone3;
    document.getElementById('제목popupLiTitle').value = obj.eTitle;
    document.getElementById('내용popupLiTitle').value = obj.eContent;
}

// 팝업창의 저장 버튼 누르면 객체에 저장되는 함수
function saveEdit(){
    // 수정하려는 객체 불러오기
    const selectedObj = arrayQuestion[modifyIndex];

    if(document.getElementById('비밀번호popup').value == selectedObj.ePassword){
        // 팝업창에서 수정한 값들로 업데이트
        selectedObj.eName = document.getElementById('이름popup').value;
        selectedObj.eEmail = document.getElementById('이메일popup').value;
        selectedObj.ePhone1 = document.getElementById('휴대전화1popup').value;
        selectedObj.ePhone2 = document.getElementById('휴대전화2popup').value;
        selectedObj.ePhone3 = document.getElementById('휴대전화3popup').value;
        selectedObj.eTitle = document.getElementById('제목popup').value;
        selectedObj.eContent = document.getElementById('내용popup').value;

        // 팝업창 닫기
        closeEditPopup();

        // 리스트 다시 출력
        printQuestion();
    }else{
        alert('비밀번호가 틀립니다. 게시글 등록 시 입력한 비밀번호를 입력하세요.');
    }
}

// 팝업창 닫기 함수
function closeEditPopup(){
    const editPopup = document.getElementById('editPopup');
    editPopup.style.display = 'none';
}

// 팝업창 닫기 함수
function closeEditPopupLiTitle(){
    const editPopup = document.getElementById('editPopupLiTitle');
    editPopup.style.display = 'none';
}