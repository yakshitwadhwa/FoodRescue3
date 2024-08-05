import React from 'react'
 import { useState } from 'react';
 
const Hub = () => {
  const[formdata,setformdata] = useState({
    firstname:"" ,lastname:"",email:"",comments:""
  });
  
  function Changehandler(event){
    const{name,value,checked,type}= event.target
    setformdata(prevformdata=>{
      return{
        ...prevformdata,
        [name ]: value
      }
    });
  }
  return (
    <div>
      
<section className='bg-black p-10 rounded-lg  bg-cover bg-center' style={{ backgroundImage: "url('../assets/file (8).png')" }}>
  <div className='flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 mx-auto'> 
    {/* Donate Box */}
     <div className='w-full md:w-1/3 p-4 bg-white rounded-lg shadow-lg'>
      <h1 className='text-blue-600 text-3xl font-bold mb-4'>Donate</h1>
      <form className='mt-6 space-y-4'>
        <input type="text" placeholder='First Name'
          className='text-gray-700 text-md border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
          onChange={Changehandler}
          name='firstname'
          value={formdata.firstname}/>  
        <input type="text" placeholder='Last Name' 
          className='text-gray-700 text-md border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
          onChange={Changehandler}
          name='lastname'
          value={formdata.lastname}/>
        <input type="email" placeholder='Enter your email' 
          className='text-gray-700 text-md border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-400'
          onChange={Changehandler}
          name='email' 
          value={formdata.email}/>
        <textarea name="message" id="message" 
          className='text-gray-700 text-md border border-gray-300 rounded-md p-3 w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-400' 
          placeholder='My Donation List'></textarea>
        <button className='h-10 w-full bg-blue-500 text-white text-md rounded-md shadow hover:bg-blue-600 transition duration-300'>Submit</button>
      </form>
    </div>

    {/* Receive Box */}


    <div className='w-full md:w-1/3 p-4 bg-white rounded-lg shadow-lg'>
      <h1 className='text-green-600 text-3xl font-bold mb-4'>Receive</h1>
      <form className='mt-6 space-y-4'>
        <input type="text" placeholder='First Name'
          className='text-gray-700 text-md border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400'
          onChange={Changehandler}
          name='firstname'
          value={formdata.firstname}/>  
        <input type="text" placeholder='Last Name' 
          className='text-gray-700 text-md border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400'
          onChange={Changehandler}
          name='lastname'
          value={formdata.lastname}/>
        <input type="email" placeholder='Enter your email' 
          className='text-gray-700 text-md border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-green-400'
          onChange={Changehandler}
          name='email' 
          value={formdata.email}/>
        <textarea name="message" id="message" 
          className='text-gray-700 text-md border border-gray-300 rounded-md p-3 w-full h-24 focus:outline-none focus:ring-2 focus:ring-green-400' 
          placeholder='Purpose and Requested Food'></textarea>
        <button className='h-10 w-full bg-green-500 text-white text-md rounded-md shadow hover:bg-green-600 transition duration-300'>Submit</button>
      </form>
    </div>
  </div>
</section>


    </div>
  )
}

export default Hub
