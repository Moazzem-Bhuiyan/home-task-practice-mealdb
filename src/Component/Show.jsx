

const Show = ({item}) => {

    const {strMealThumb,strIngredient1,strCategory}=item

    return (
        <div>

            <div className="p-5 bg-indigo-50 rounded-lg">

            <img className="hover:scale-105 duration-1000 rounded-md shadow-2xl" src={strMealThumb} alt="" />

            <h1 className="text-center text-3xl font-bold pt-5">{strIngredient1}</h1>
            <h1 className=" text-xl pt-4 p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, corporis.</h1>

          




            </div>
           
            
        </div>
    );
};

export default Show;