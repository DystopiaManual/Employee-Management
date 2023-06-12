import React, { useEffect } from 'react'
import moment from 'moment/moment';


function Employee(props) {
  console.log(props.joindate); // joindate를 콘솔에 출력

  const moment = require('moment-timezone');
  const jd = props.joindate;  
  const dateInUS = moment(jd);

  // 미국시간을 한국시간으로 변경
  const dateInKR = dateInUS.tz('Asia/Seoul');
  const krTime = dateInKR.format();

  // 불필요 영역 자르기
  const dateResult = krTime.substr(0, 10);
  console.log(dateResult); 
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