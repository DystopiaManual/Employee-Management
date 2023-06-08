import React from 'react'

function Employee(props) {
  return (
    <tr className='employee-info'>
        <td>{props.id}</td>
        <td><img src={props.image} alt='프로필사진'/></td>
        <td>{props.name}</td>
        <td>{props.birthday}</td>
        <td>{props.gender}</td>
        <td>{props.job}</td>
        <td>{props.position}</td>
        <td>{props.joinDate}</td>
    </tr>
  )
}

export default Employee