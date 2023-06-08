import React from 'react'

function Employee(props) {
  return (
    <div>
        <EmployeeProfile id={props.id} name={props.name} image={props.image}/>
        <EmployeeInfo birthday={props.birthday} gender={props.gender} job={props.job} position={props.position} joinDate={props.joinDate}/>
    </div>
  )
}

function EmployeeProfile(props){
    return (
        <div>
            <img src={props.image} alt='profile'/>
            <h2>{props.name}({props.id})</h2>
        </div>
    )
}

function EmployeeInfo(props){
    return (
        <div>
            <p>{props.birthday}</p>
            <p>{props.gender}</p>
            <p>{props.job}</p>
            <p>{props.position}</p>
            <p>{props.joinDate}</p>
        </div>
    )
}


export default Employee