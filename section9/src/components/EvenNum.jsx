import { useEffect } from "react";

const EvenNum= () => {
    useEffect(()=>{
        // 클린업, 정리 함수
        // 이 정리 함수는 useEffect가 끝날 때 실행이 된다.
        return()=>{
            console.log("UnMount")
        }
    },[])
    return(
        <div>짝수입니다.</div>
    )
}

export default EvenNum;