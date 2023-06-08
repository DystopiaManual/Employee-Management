import logo from './logo.svg';
import './reset.css';
import './App.css';
import './main.css';
import Employee from './components/Employee';

const employee = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/any',
    'name': '홍길동',
    'birthday': '930924',
    'gender': '남자',
    'job': '개발자',
    'position': '대리',
    'joinDate': '20220303'
  },
]


function App() {
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
                employee.map(c => {
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
                })
              }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
