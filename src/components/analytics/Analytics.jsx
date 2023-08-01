import React from 'react'
import Laptop from '../../assets/Laptop.jpeg'

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img src={Laptop} alt="/" className="w-[500px] my-4 mx-auto" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold">Data Analytics Dashboards</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Unlock the potential of your data with our Data Analytics Dashboards
            and manage your analyses centrally, making decision-making smarter
            and more efficient!
          </p>
          <button className="text-[#00df9a] bg-[#003000]">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
