import React from 'react'

function IconCard(props:any) {
  return (
    <div className='flex relative w-full justify-center items-center border border-gray-200  flex-col px-[3rem] py-[2rem] hover:shadow-lg cursor-pointer rounded-lg  text-gray-700'>
    <div className={`text-white px-3 py-2 absolute left-0 top-3 rounded-r-lg `} style={{background:props.tagBg}}>
      {props.number}
    </div>
    { React.createElement(props.icon)}
    <p className=' text-lg font-mono font-semibold '>{props.name}</p>
</div> 
  )
}

export default IconCard