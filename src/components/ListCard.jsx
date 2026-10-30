import React from 'react'

const ListCard = ({val,onClick}) => {
  return (
    <div onClick={onClick} className="flex h-20 w-90 gap-5">
       <div className=""> 
          <img className="h-20 w-20 rounded-full" src={val.image}/>
       </div>
       <div className="w-50 flex items-center justify-between ">
        <div>
          <h1 className="text-xl">{val.name}</h1>
          <h1 className="text-sm ">{val.phone}</h1>
          </div>
          <div>
             {val.message 
              ? <div className="bg-red-600 h-5 w-5 rounded-full text-center text-sm">{val.message}</div> 
              : <div></div>
            }
          </div>
       </div>
    </div>
  )
}

export default ListCard
