import logo from './logo.svg';
import './App.css';
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
]


function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
