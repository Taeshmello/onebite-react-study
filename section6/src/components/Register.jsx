//간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
import { useState } from 'react';
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

    const onChange = (e) =>{{
        setInput({
            ...input,
            [e.target.name]:e.target.value,
            [e.target.birth]:e.target.value,
            [e.target.country]:e.target.value,
            [e.target.bio]:e.target.value,

        })
    }}
    

    
    
  
    return(
    <div>
        <div>
            <input 
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
    </div>
    )
}

export default Register;