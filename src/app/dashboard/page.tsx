import Link from "next/link";

import password from "./setting/password/page";
import Image from "next/image";
import sady from '../../../public/sad.jpg'


export default function Dashboard() {
    return(
        
         <main className="font-bold text-6xl text-yellow-600 bg-green-100">
              <header className="bg-gray-700 px-3 py-3 flex gap-2 text-white">
    <Link href="/dashboard/analytics">Analytics</Link>
    <Link href="/dashboard/setting">Setting</Link>

    </header>
            This is dashboard Route    
    

    <Image src={sady} width={300} height={200} alt={""} className="border-4 border-blue-600 rounded-full"></Image>
  
    </main>
    );
}
