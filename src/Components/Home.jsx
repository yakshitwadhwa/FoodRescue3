import React from 'react'
import imgg from "../assets/file (5).png"
import imgg2 from "../assets/file (6).png"
import imgg3 from "../assets/file (7).png"
import imgg4 from "../assets/file (8).png"
import imgg5 from "../assets/WhatsApp Image 2024-07-31 at 21.43.33_621a129b.jpg"
import imgg7 from "../assets/WhatsApp Image 2024-07-31 at 22.01.56_621ef2f0.jpg"
import imgg8 from "../assets/WhatsApp Image 2024-08-01 at 22.36.17_f590cdcd.jpg"

import { useState } from 'react'

const Home = () => {



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
   
    
    <div className='text-white text-center font-bold text-2xl space-y-7 max-h-[1200px] bg-black overflow-x-auto' >
<div className="flex justify-center items-center mt-12 bg-black">
<img src={imgg8} alt=""height={380} width={460} />
</div>
      <div className='mt-11 space-y-7 bg-black'>
   <h1>"Join the Fight Against Food Waste and Hunger"</h1>
   <h2> "Connect surplus food with those in need and help create a more sustainable future."</h2>
   <p className='mx-auto  bg-green-500 text-xl '>
<h5>What is FoodRescue?</h5>
<p className=' mx-8'> FoodRescue is a user-friendly platform designed to reduce food waste and hunger by connecting surplus food from businesses and individuals to local food banks and charities. Our mission is to ensure that no food goes to waste while addressing the needs of those who are hungry. Join us in our journey towards a more sustainable and equitable world.</p></p>
</div>







<div className='mt-19 bg-black'>
  <h1 className='text-5xl text-orange-400 bg-white w-[1000px] text-center mx-auto  mt-14 '>"Food for All, Hope for Everyone"</h1>
  <div className='flex flex-row gap-[90px] mx-auto items-center justify-center text-sm'>
    <div className='flex flex-col'>
      <img src={imgg} height={10} width={200} alt='' />
      <div>*346765376*</div>
<div className='text-xl text-green-300'>  Donation Success Rate</div>
    </div>
    <div className='flex flex-col'>
    <img src={imgg2} height={10} width={210} alt=''/>
      <div>*721 kg* Groceries Donated to Families</div>
<div className='text-xl text-green-300'> Grocery Donations
</div>
    </div>
    <div className='flex flex-col'>
    <img src={imgg3} height={10} width={200} alt='' />
<div>*120* Upcoming Community Events
</div>
<div className='text-xl text-green-300'>   Event Participation
</div>
    </div>
    <div className='flex flex-col'>
    <img src={imgg4} height={10} width={190} alt=''/>
      <div>*30* Wellness Workshops Conducted
      </div>
<div className='text-xl text-green-300'>Health and Wellness
</div>
    </div>
    
  </div>
</div>















{/* nextsection  */}
<div className='flex  space-x-9 mx-auto items-center justify-center text-black bg-black  mb-10'> 
  <section className='w-[500px] space-x-9 bg-green-500 h-[450px] space-y-8 text-center hover:shadow-xl '>
    <img src={imgg7} alt="" height={26} width={210} className='mx-auto mt-5 rounded-full'/>
    <h1>BENEFITING COMMUNITIES</h1>
    <p className='text-sm'>
  One in seven people in our area faces food insecurity. By providing nutritious food and minimizing waste, we contribute to a fairer food system for everyone. Our goal is to ensure that every individual has equal access to healthy nutrition.
  </p></section>
  <section className='w-[500px]  space-x-9 bg-green-500 h-[450px] space-y-8 text-center'>
    <img src={imgg5} alt=""height={20} width={210} className='mx-auto mt-5 rounded-full' />
  <h1>BENEFITING THE PLANET</h1>
  <p className='text-sm'>
  Over a third of all food produced goes to waste. Preventing this food from ending up in landfills helps lower greenhouse gas emissions, combating global climate change. Additionally, it conserves money, water, and other valuable natural resources.</p>
  </section>
</div>




{/* next section  */}
<div className='bg-black '>
<section className='mt-7 bg-black'>
        <h2 className='text-3xl  mb-5'>Our Mission</h2>
        <p className='mx-auto bg-green-500 text-xl'>
          At FoodRescue, our mission is to eliminate food waste and ensure that surplus food reaches those in need. We believe that by connecting donors with local charities, we can create a more sustainable and equitable future for all.
        </p>
      </section>

      <section className='mt-10'>
        <h2 className='text-3xl mb-5'>How It Works</h2>
        <p className='mx-auto bg-green-500 text-xl'>
          FoodRescue makes it easy for businesses and individuals to donate surplus food. Simply register on our platform, list your surplus items, and we will connect you with local food banks and charities. Together, we can make a difference.
        </p>
      </section>

      <div className='mt-10'>
        <h2 className='text-3xl mb-5'>Get Involved</h2>
        <p className='mx-auto bg-green-500 text-xl'>
          There are many ways to get involved with FoodRescue. You can donate food, volunteer your time, or spread the word about our mission. Join us in the fight against food waste and hunger.
        </p>
      </div>

      <div className='mt-10'>
        <h2 className='text-3xl mb-5'>Testimonials</h2>
        <div className='mx-auto bg-green-500 text-xl'>
          <p>"FoodRescue has been a game-changer for our community. The ability to connect surplus food with those in need has made a significant impact." - Community Member</p>
          <p>"Thanks to FoodRescue, we have been able to reduce our food waste and help those in need. It's a win-win!" - Local Business Owner</p>
        </div>
      </div>
      </div>
     



{/* form section */}
<section className='bg-gray-200 p-10 rounded-lg shadow-lg bg-cover bg-center ' style={{ backgroundImage: "url('/path/to/your/image.jpg')" }}>
  <h1 className='text-black text-4xl font-bold mb-6'>Contact Us</h1>
  <form className='mt-9 space-y-4'>
    <input type="text" placeholder='First Name'
      className='text-black text-lg border border-slate-900 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
      onChange={Changehandler}
      name='firstname'
      value={formdata.firstname}/>  
    <input type="text" placeholder='Last Name' 
      className='text-black text-lg border border-slate-900 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
      onChange={Changehandler}
      name='lastname'
      value={formdata.lastname}/>
    <input type="email" placeholder='Enter your email' 
      className='text-black text-lg border border-slate-900 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-blue-500'
      onChange={Changehandler}
      name='email' 
      value={formdata.email}/>
    <textarea name="message" id="message" 
      className='text-black text-lg border border-slate-900 rounded-md p-3 w-full h-24 focus:outline-none focus:ring-2 focus:ring-blue-500' 
      placeholder='Write your message here'></textarea>
    <button className='h-10 w-full bg-blue-500 text-white text-lg rounded-md shadow hover:bg-blue-600 transition duration-300'>Submit</button>
  </form>
</section>









{/* nexxt section of projects */}

        


<footer className='bg-black text-white py-10 text-lg'>
        <div className='container mx-auto px-6'>
          <div className='flex flex-col items-center space-y-6'>
            <div className='flex space-x-6'>
              <a href='#' className='text-white hover:text-green-500'>Home</a>
              <a href='#' className='text-white hover:text-green-500'>About Us</a>
              <a href='#' className='text-white hover:text-green-500'>Services</a>
              <a href='#' className='text-white hover:text-green-500'>Contact</a>
            </div>
            <div className='flex space-x-4'>
             
              <a href='#' className='text-white hover:text-green-500'>
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M23.954 4.569a10.002 10.002 0 0 1-2.825.775A4.942 4.942 0 0 0 23.337 2c-.943.557-1.99.96-3.1 1.183a4.922 4.922 0 0 0-8.384 4.482 13.977 13.977 0 0 1-10.15-5.149 4.912 4.912 0 0 0 1.523 6.555 4.88 4.88 0 0 1-2.229-.616v.062a4.922 4.922 0 0 0 3.95 4.827 4.929 4.929 0 0 1-2.224.084 4.93 4.93 0 0 0 4.6 3.417A9.864 9.864 0 0 1 .98 20.58 13.944 13.944 0 0 0 7.548 22.77c9.058 0 14.01-7.504 14.01-14.01 0-.213-.005-.425-.014-.637A10.001 10.001 0 0 0 23.954 4.57z'/>
                </svg>
              </a>
              <a href='#' className='text-white hover:text-green-500'>
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M19.615 0H4.383C1.96 0 0 1.96 0 4.383v15.233C0 22.042 1.96 24 4.383 24h15.233C22.042 24 24 22.042 24 19.615V4.383C24 1.96 22.042 0 19.615 0zM7.232 19.384H4.884V9.216h2.348v10.168zm-1.174-11.67h-.017c-.788 0-1.299-.544-1.299-1.224 0-.693.524-1.224 1.327-1.224.804 0 1.299.53 1.316 1.224 0 .68-.512 1.224-1.327 1.224zm14.094 11.67h-2.348v-5.471c0-1.378-.492-2.321-1.729-2.321-.944 0-1.507.636-1.754 1.248-.089.217-.111.519-.111.82v5.725h-2.348v-7.428c0-1.343-.482-2.256-1.689-2.256-.922 0-1.473.636-1.717 1.248-.089.217-.106.519-.106.82v7.616h-2.348v-10.17h2.348v1.393h.033c.32-.527 1.046-1.283 2.549-1.283 1.862 0 3.258 1.221 3.258 3.845v6.215z'/>
                </svg>
              </a>
             
              <a href='#' className='text-white hover:text-green-500'>
                <svg className='w-6 h-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.334 3.608 1.31.975.975 1.248 2.243 1.31 3.608.058 1.265.07 1.645.07 4.849 0 3.204-.012 3.584-.07 4.849-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.243 1.248-3.608 1.31-1.265.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.248-2.243-1.31-3.608C2.175 15.596 2.163 15.216 2.163 12c0-3.204.012-3.584.07-4.849.062-1.366.334-2.633 1.31-3.608.975-.975 2.243-1.248 3.608-1.31C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 5.773.127 4.634.384 3.634 1.384 2.634 2.384 2.377 3.523 2.32 4.802 2.263 6.083 2.251 6.491 2.251 12c0 5.509.012 5.917.07 7.198.057 1.279.314 2.418 1.314 3.418 1 1 2.138 1.257 3.417 1.314 1.28.057 1.689.07 7.198.07 5.509 0 5.917-.012 7.198-.07 1.279-.057 2.418-.314 3.418-1.314 1-1 1.257-2.138 1.314-3.417.057-1.28.07-1.689.07-7.198 0-5.509-.012-5.917-.07-7.198-.057-1.279-.314-2.418-1.314-3.418-1-1-2.138-1.257-3.417-1.314C15.667.012 15.258 0 12 0z'/>
                  <path d='M12 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 1 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zM18.406 4.594a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 1 0 0-2.88z'/>
                </svg>
              </a>
            </div>
            <div className='text-center'>
              <p>© 2024 FoodRescue. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>





    </div>
  )
}

export default Home