//간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
import { useState } from 'react';
const Register = () => {
    let nowDate = new Date()
    const [name, setName] = useState("");
    const [date, setDate] = useState();
    const [country, setCountry] = useState("");
    const [bio, setBio] = useState("");

    const onChangeName = (e) => {
        console.log(e)
        setName(e.target.value);
    };
    const onChangeDate = (e) => {
        setDate(e.target.value)
    };

    const onChangeCountry = (e) =>{
        setCountry(e.target.value)
    }

    const onChangeBio = (e) => {
        setBio(e.target.value)
    }

    const countryList = {
        kr: "kr",
        usa: "us",
        uk: "uk",
        bz: "bz",
    }

    return(
    <div>
        <div>
            <input 
            value={name}
            onChange={onChangeName} 
            placeholder={"이름"}></input>
        </div>
        <div>
        <input 
        value={date} 
        onChange={onChangeDate} 
        type='date'>
        </input>
        </div>
        <div>
            <select value={country} onChange={onChangeCountry}>
                <option></option>
                <option value={countryList.kr}>한국</option>
                <option value={countryList.usa}>미국</option>
                <option value={countryList.uk}>영국</option>
                <option value={countryList.bz}>브라질</option>
            </select>
        </div>
        
        <div>
            <textarea value={bio} onChange={onChangeBio}/>
            {bio}
        </div>
    </div>
    )
}

export default Register;