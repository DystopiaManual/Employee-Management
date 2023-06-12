import React, { useEffect } from 'react'

function Employee(props) {
  console.log(props.joindate); // joindate를 콘솔에 출력
  const jd = props.joindate;  
  const dateResult = jd.substr(0, 10);
  console.log(jd.substr(0, 10)); // 불필요 영역 자르기
  return (
    <tr className='employee-info'>
        <td>{props.id}</td>
        <td><img src={props.image} alt='프로필사진'/></td>
        <td>{props.NAME}</td>
        <td>{props.birthday}</td>
        <td>{props.gender}</td>
        <td>{props.job}</td>
        <td>{props.POSITION}</td>
        <td>{dateResult}</td>
    </tr>
  )
}

export default Employee