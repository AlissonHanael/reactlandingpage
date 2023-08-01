import React from 'react'

const Cards = props => {
  return (
    <div className="w-full py-[8rem] px-4 bg-white">
      <div className="max-w-[500px] mx-auto gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale(105) duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={props.img}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">{props.plan}</h2>
          <p className="text-center text-4xl font-bold">{props.price}</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">{props.storage} Storage</p>
            <p className="py-2 border-b mx-8">{props.grantUser} Allowed</p>
            <p className="py-2 border-b mx-8">Send up to {props.upload} GB</p>
          </div>
          <button>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
