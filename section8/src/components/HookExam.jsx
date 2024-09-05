
// 3가지 hook 관련 팁
// 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능.
// 조건부로 호출될 수 없다.
// 나만의 훅(custom hook)으로 만들 수 있다.




//custom hook : 앞에 use 붙이기
import {useState} from "react";
import useInput from "./../hooks/useInput";




const HookExam = () => {

    const [input,onChange] = useInput();
    return(
        <div>
        <input value={input} onChange={onChange}/>
        </div>
    )
}

export default HookExam;