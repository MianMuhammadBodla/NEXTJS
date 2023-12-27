"use client";


const Mybutton =  () => {
    const handleClick=()=>{
        alert("Hello I am Button Click") 
    }

return( 
    <div  className="flex gap-5 p-3 flex-col ">
    <div>
    <button className=" bg-red-100 rounded-md p-1" onClick={handleClick}>i am Mybutton</button> </div>
    {`Web events, react hooks clent component,
    to make client component always use "use client " on top of the file`}
    </div>


)}

export default Mybutton;