import React, { useCallback } from 'react'
import axios from 'axios';
import { useState } from 'react';

function EmployeeAdd(props) {
    const today = new Date();   
    const year = today.getFullYear(); // 년도
    const month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월
    const date = today.getDate();  // 날짜

    const dateResult = year + '-' + month + '-' + date;

    console.log(dateResult)
    const [file, setFile] = useState(null);
    const [NAME, setNAME] = useState('');
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [job, setJob] = useState('');
    const [position, setPosition]= useState('사원');
    const [joindate, setJoindate]= useState(dateResult);
    const [fileName, setFileName] = useState('');

    const stateRefresh = props.stateRefresh;
    const handleFormSubmit = (e) => {
        e.preventDefault();
        addEmployee()
          .then((response) => {
            console.log(response.data);
            stateRefresh();
          });
          setFile(null)
          setNAME('')
          setBirthday('')
          setGender('')
          setJob('')
          setPosition('')
          setJoindate('')
          setFileName('')
          stateRefresh();
    }
    const handleFileChange = (e) => {
          setFile(e.target.files[0]);
          setFileName(e.target.value);
    }

    const handleValueChange = useCallback((e) => {
        switch (e.target.name) {
          case 'NAME':
            setNAME(e.target.value);
            break;
          case 'birthday':
            setBirthday(e.target.value);
            break;
          case 'gender':
            setGender(e.target.value);
            break;
          case 'job':
            setJob(e.target.value);
            break;
          case 'position':
            setPosition(e.target.value);
            break;
          case 'joindate':
            setJoindate(e.target.value);
            break;
          default:
            break;
        }
      }, [setNAME, setBirthday, setGender, setJob, setPosition, setJoindate])
    

    const addEmployee = () => {
    const url = '/api/employees';
    const formData = new FormData();
    formData.append('image', file);
    formData.append('NAME', NAME);
    formData.append('birthday', birthday);
    formData.append('gender', gender);
    formData.append('job', job);
    formData.append('POSITION', position);
    formData.append('joindate', joindate)

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }

    return axios.post(url, formData, config);
  }

  return (
    <form onSubmit={handleFormSubmit}>
        <h1>고객 추가</h1>
        프로필 이미지: <input type="file" name="file" file={file} value={fileName} onChange={handleFileChange}></input><br/>
        이름 : <input type="text" name="NAME" defaultValue={NAME} onChange={handleValueChange}></input><br/>
        생년월일 : <input type='text' name='birthday' defaultValue={birthday} onChange={handleValueChange}></input><br/>
        성별 : <input type='text' name='gender' defaultValue={gender} onChange={handleValueChange}></input><br/>
        직업 : <input type='text' name='job' defaultValue={job} onChange={handleValueChange}></input><br/>
        직위 : <select required="required" type='text' name='position' defaultValue={position} onChange={handleValueChange}>
                    <option selected disabled>직위를 선택해주세요.</option>
                    <option value="사원">사원</option>
                    <option value="주임">주임</option>
                    <option value="대리">대리</option>
                    <option value="과장">과장</option>
                    <option value="차장">차장</option>
                    <option value="부장">부장</option>
               </select><br/>
        입사날짜 : <input type='date'
                         id='joindate'
                         name='joindate'
                         max='2077-06-20'
                         min='1999-01-01'
                         defaultValue={dateResult}
                         onChange={handleValueChange}
                   ></input><br/>
        <button type='submit'>추가하기</button>
    </form>
  )
}

export default EmployeeAdd