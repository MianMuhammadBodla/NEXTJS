import Button from "@/components/Buttons"
import Buttonn from "@/components/Buttonnn"
import Image from "next/image";
import profile from '../../public/IMG.jpg'
import jbc from '../../public/im.jpg'
import fds from '../../public/fdss.jpg'
import sadd from '../../public/sad.jpg'
import vlogg from '../../public/vlog.jpg'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
    <h1 className="font-bold text-6xl text-red-700 ">
      Welcome Dear
    </h1>
    
    
    <p className="font-serif text-1xl text-green-300 ">

    Greedings My Name is Muhammad
    </p>
    <Image
  src={profile}
  width={300}
  height={150}
  alt={""}
  className="border-4 border-green-500 rounded-full"
></Image>


    <p className="font-serif text-2xl text-blue-300">
    My College id is 244401711
    </p>
    <p className="font-serif text-2xl text-gray-400">
    
    I am Second year student of Fsc Pre Medical at Forman Christian College Lahore
    </p>
    <Image src={sadd} width={300} height={200} alt={""} className="border-4 border-blue-500 rounded-3xl "></Image>
    
    <div >
      <Buttonn href="https://instagram.com/mian.muhammadbodla?igshid=MXVidnAwMnQ1dXhtZw==">Instagram Page </Buttonn>
    </div>
    <h2 className="font-serif text-6xl text-green-800">
      Extra Activities
    </h2>
    <p className="font-bold text-2xl text-yellow-400">
      President of Junior Biological Club in FCCU
      </p>
      <Image src={jbc} width={300} height={200} alt={""} className="border-4 border-yellow-400 rounded-md"></Image>
      <p className="font-bold text-2xl text-red-400">
      Speaker of Formanites Debating Society 
      </p>
      <Image src={fds} width={300} height={200} alt={""} className="border-4 border-red-300 rounded-2xl"></Image>
      <p className="font-sans text-2xl text-red-200">
    I have also YouTube Channel name as Mian Muhammad Bodla 
    </p>
    <div>
      <Button href="https://www.youtube.com/@mianmuhammadbodla">YouTube Channel</Button>
    </div>
    <Image src={vlogg} width={300} height={150} alt={""} className="border-4 border-emerald-400 rounded-3xl" ></Image>
    <h1 className="font-bold text-3xl text-green-400 ">Stay Blessed</h1>
    </main>
  );
}
