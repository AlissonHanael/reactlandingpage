import React from 'react'

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="p-4 max-w-[1240ox] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your flow?
          </h1>
          <p>Sign up to our Newsletter and stay up to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center">
            <input
              className="p-3 flex w-full rounded-md text-black mr-4"
              type="email"
              placeholder="Enter E-mail"
              name=""
              id=""
            />
            <button>Notify Me</button>
          </div>
          <p>
            We care about the protection of your data. Read our{' '}
            <a className="text-[#00df9a]" href="#home">
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
