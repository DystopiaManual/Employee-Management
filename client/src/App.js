import logo from './logo.svg';
import './reset.css';
import './App.css';
import './main.css';
import Employee from './components/Employee';
import { useEffect, useState } from 'react';
import Loading from './Loading';
import EmployeeAdd from './components/EmployeeAdd';

function App() {
  const [employees,setEmployees] = useState([]);
  // api 로딩처리
  const [loading, setLoading] = useState(null);


  useEffect(() => {
    // 3. callApi함수를 실행하고 useState로 employee값 변경
    setLoading(true); // api 호출 전에 true로 변경하여 로딩화면 출력

    callApi()
      .then(res => {
        setEmployees(res)
        // api 호출이 완료되면 false로 값 변경하여 숨김
        setLoading(false)
      })
      // 에러발생시 콘솔출력
      .catch(err => console.log(err));
  }, []);
  
  const stateRefresh = () => {
    setEmployees([])
    callApi()
      .then(res => {
        setEmployees(res)        
        setLoading(false)
      })
      .catch(err => console.log(err));
  }

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
              <th>직위</th>
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
                      NAME={c.NAME}
                      birthday={c.birthday}
                      gender={c.gender}
                      job={c.job}
                      POSITION={c.POSITION}
                      joindate={c.joindate}
                    />    
                  )
                  // employees의 값이 없으면 공백 출력
                }) : <Loading/>
              }
          </tbody>
        </table>
        <EmployeeAdd stateRefresh={stateRefresh}/>
      </div>
    </div>
  );
}

export default App;
