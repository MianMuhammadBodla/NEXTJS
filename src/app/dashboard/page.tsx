import password from "./setting/password/page";
import Image from "next/image";
import sady from '../../../public/sad.jpg'


export default function Dashboard() {
    return(
         <main className="font-bold text-6xl text-yellow-600 bg-green-55">This is dashboard Route 
    
    <Image src={sady} width={300} height={200} alt={""} className="border-4 border-blue-600 rounded-full"></Image>
    
    </main>
    );
}
