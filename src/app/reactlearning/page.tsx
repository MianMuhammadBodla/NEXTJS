
import Mybutton from "@/components/Mybutton";
import AboutPage from "@/components/markupWithJsx";
import Dispalydata from "@/components/dispalydata";
import ConditionalRendering1 from "@/components/ConditionalRendering";
function Mybutton2() {
    return (
      <button className=" p-3 bg-slate-300 rounded-lg text-cyan-500">I'm  button2</button>
    )};

const reactlearning = () => {
return (<div className="flex flex-col gap-5 text-xs"> REACT LEARNING

    <div >create a component
    <h1>Welcome to my app</h1>
       <div className="space-y-5 flex gap-2 text-white"><Mybutton />
       <div>
       <Mybutton2 />
       </div>
       </div> 
    </div>
    <div>
     <p className="text-sm font-semibold">Markup With JSX</p>  
     <AboutPage/>
    <p className="text-sm font-semibold">In React, you specify a CSS class with className. It works the same way as the HTML class attribute</p>
    </div>

<div className="texxt-sm font-semibold">

 Displaydata
  <Dispalydata/>
</div>

<div className="texxt-sm font-semibold">

 Conditional Rendering 

  <ConditionalRendering1 />
   
</div>


</div>
);
};



export default reactlearning;