import React, { useEffect, useState } from 'react';
import Show from '../Component/Show';

const Home = () => {


    const [food,setFood]=useState([])

    const[search,setSearch]=useState('')
   

    const loaddata = useEffect(()=>{


        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s= ${search}`)

        .then(res => res.json())

        .then(data => setFood(data.meals));
        



    },[search])

    const handleEvent =(e)=>{

        e.preventDefault();

        setSearch(e.target.value)
    }

    return (
        <div>
        
        <div>    <h1 className='text-6xl font-mono font-black text-center my-10 text-white shadow-lg rounded-2xl '> Ashen Bhai Khan </h1>

                   <h2 className='text-3xl font-mono font-black text-center mt-3 text-green-500 '>Let's search your favorite <span className='text-white'> fooood!!!</span></h2>
                   <hr className='mt-5' /> 

                 <div className='text-center mt-10'>

                 <form>

                 <input onBlur={handleEvent} className='w-[400px] h-[50px] bg-indigo-50  border-2 rounded-lg pl-4' type="search" name="input" placeholder=' 🔎 Search your meal' id="" required />

                <button  onClick={()=> loaddata()} type='submit' className='bg-green-500 text-xl text-white px-4 h-12 rounded-lg ml-5 hover:scale-105 duration-500'>Search</button>



                 </form>

                 </div>
                    
 

                   <div className='grid md:grid-cols-4 gap-5 mt-10'>
                    {
                        food.map((item)=> <Show item={item}></Show>)

                    }
                   </div>
        
        </div>


            
        </div>
    );
};

export default Home;