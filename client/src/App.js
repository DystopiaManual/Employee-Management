import logo from './logo.svg';
import './reset.css';
import './App.css';
import './main.css';
import Employee from './components/Employee';
import { useEffect, useState } from 'react';

function App() {
  const [employees,setEmployees] = useState([]);
  
  useEffect(() => {
    // 3. callApi함수를 실행하고 useState로 employee값 변경
    callApi()
      .then(res => setEmployees(res))
      // 에러발생시 콘솔출력
      .catch(err => console.log(err));
  });
  
  const callApi = async () => {
    // 1. /api/customers 경로로접근
    const response = await fetch('/api/employees');
    // 2. 해당경로의 json데이터를 body에 담기
    const body = await response.json();
    return body;
  }

  return (
    <div className="App">
      <div className='list-wrap'>
        <table>
          <thead className='thead'>
            <tr className='header'>
              <th colSpan={8}>
                MANAGEMENT SYSTEM
              </th>
            </tr>
            <tr className='table-sticky'>
              <th>사원번호</th>
              <th>프로필사진</th>
              <th>이름</th>
              <th>생년월일</th>
              <th>성별</th>
              <th>직무</th>
              <th>직급</th>
              <th>입사일</th>
            </tr>
          </thead>
          <tbody className='tbody'>
              {
                // employees의 값이 있을때 테이블 출력
                employees ? employees.map(c => {
                  return (
                    <Employee
                      key={c.id}
                      id={c.id}
                      image={c.image}
                      name={c.name}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                      position={c.position}
                      joinDate={c.joinDate}
                    />    
                  )
                  // employees의 값이 없으면 공백 출력
                }) : ""
              }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
