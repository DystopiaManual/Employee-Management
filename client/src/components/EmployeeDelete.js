import React, { useState } from 'react'


function EmployeeDelete(props) {
    
    const { stateRefresh, id } = props;

    const deleteEmployee = (id) => {
      const url = '/api/employees/' + id;
      fetch(url, {
          // HTTP DELETE METHOD
          method: 'DELETE'
      })
      .then(response => response.json())
      .then(() => stateRefresh())
    }

    const handleDeleteClick = (id) => {
      if(window.confirm("정말 삭제하시겠습니까?")) {
        alert("삭제되었습니다.");
        deleteEmployee(id);
      } else {
        alert("취소되었습니다.");
      }
    }

  return (
    <button onClick={() => handleDeleteClick(id)}>삭제</button>
  )
}

export default EmployeeDelete