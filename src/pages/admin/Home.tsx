import React, { useState } from 'react'
import { FaUserTie,FaUserFriends,FaStickyNote,FaBullhorn,FaTh } from "react-icons/fa";
import IconCard from '../../component/cards/IconCard';

function Home() {

  const TopIconCard = [
    {name:'Total Students',count:100,tagBg:'#00b5ad',icon:FaUserTie},
    {name:'Total Courses',count:1000,tagBg:'#00b5ad', icon:FaUserFriends},
    {name:'Total Teacher ',count:300,tagBg:'#00b5ad',icon:FaStickyNote},
    {name:'Fees Collection',count:100,tagBg:'#00b5ad',icon:FaTh},
  ]

  return (
  <>
   <section className='flex flex-col md:flex-row  gap-3 w-full justify-around items-center my-3'>
     {TopIconCard?.map((e)=>(
      <IconCard name={e.name} icon={e.icon} number={e.count} tagBg={e.tagBg} />
     ))}
   </section>
   <section className='flex flex-col md:flex-row  gap-3 w-full justify-around items-center my-3'>
    <div className="flex w-full justify-center items-center gap-3 flex-col md:flex-row">
      
    </div>
    <div className="flex w-full justify-center items-center gap-3 flex-col md:flex-row">

    </div>
    <div className="flex w-full justify-center items-center gap-3 flex-col md:flex-row">

    </div>
   </section>
  </>
  )
}

export default Home