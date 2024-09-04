import { useState } from "react";

//컴포넌트가 리렌더링 되는 세가지 조건
// 1. 자신이 관리하는 state의 값이 변화할 때
// 2. 자신이 제공받는 props의 값이 변경되었을 때
// 3. 부모 컴포넌트가 리랜더링되면 자식 컴포넌트도 리랜더링이 된다.


const LoginedUser = () => {
    const userInfo = {
      name: "엄준식",
      isLogin : "로그인됨",
    }
    const [login, setLogin] = useState(userInfo.isLogin);
    return(
      <>
      <div>
      <h1>{userInfo.name}</h1>
      <h1>{login}</h1>
      <button onClick={()=>{
        if(login === "로그인됨"){
          setLogin("로그아웃됨")
        }else{
          setLogin("로그인됨")
        }
      }}>{login == "로그인됨" ? "로그아웃하기":"로그인하기"}</button>
      </div>
      </>
    )
    
  }

  export default LoginedUser;