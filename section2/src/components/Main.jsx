//JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음.
// 조건문 반복문 X
// 2. 숫자, 문자열, 배열 값만 랜더링 된다.
// 3. 모든 태그는 닫혀있어야한다.
// 4. 최상위 태그는 반드시 하나여야만 한다.

import './Main.css'
const Main = () => {
    const user = {
        name:"엄준식",
        isLogin: "true",
    };

    if(user.isLogin){
        return(
            <div className='logout'>로그아웃됨</div>
        )
    } else {
        return(
            <div>로그인됨</div>
        )
    }
    // return(
    //     <>
    //     {user.isLogin ? "로그인됨": "로그아웃됨"}
    //     </>
        
    // )
}

export default Main;