//간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
import { useState, useRef } from 'react';
const Register = () => {
    
    const countryList = {
        kr:"Korea",
        us:"Unitied States of America",
        uk:"United Kingdom",
        bz:"Brazil",
    }
    const [input,setInput]=useState({
        name:"",
        birth:"",
        country:"",
        bio:"",
    });


    const countRef = useRef(0);
    const inputRef = useRef();
    
    const onChange = (e) =>{{
        countRef.current++;
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name]:e.target.value,
        })
    }};
    
    const onSubmit = () => {
        if(input.name === ""){
            inputRef.current.focus();
            
        }
    };
    return(
    <div>
        <div>
            <input 
            ref={inputRef}
            name='name'
            value={input.name}
            onChange={onChange} 
            placeholder={"이름"}></input>
        </div>
        <div>
        <input 
        name='birth'
        value={input.birth} 
        onChange={onChange} 
        type='date'>
        </input>
        </div>
        <div>
            <select 
            name='country' 
            value={input.country}
            onChange={onChange}>
                <option></option>
                <option value={countryList.kr}>한국</option>
                <option value={countryList.usa}>미국</option>
                <option value={countryList.uk}>영국</option>
                <option value={countryList.bz}>브라질</option>
            </select>
        </div>
        <div>
            <textarea name='bio' 
            value={input.bio} 
            onChange={onChange}/>
            {input.bio}
        </div>
        <button onClick={onSubmit}>제출 버튼</button>
    </div>
    )
}

export default Register;