import React from 'react'

function miniTable() {

    const cols = ['#','Teacher Name','Status']
    const rows = [
        {id:1,name:'teacherName',status: 'absent'},
        {id:2,name:'teacherName',status: 'available'},
        {id:3,name:'teacherName',status: 'absent'},
        {id:4,name:'teacherName',status: 'absent'},
        {id:5,name:'teacherName',status: 'available'},
        {id:6,name:'teacherName',status: 'absent'},
        {id:7,name:'teacherName',status: 'absent'},
        {id:8,name:'teacherName',status: 'available'}
    ]

  return (
    <>
        <table className='' style={{height:'450px'}}>
            <thead>
                <th>{cols[0]}</th>
                <th>{cols[1]}</th>
                <th>{cols[2]}</th>
            </thead>
            <tbody>
                
            </tbody>
        </table>
    </>
  )
}

export default miniTable