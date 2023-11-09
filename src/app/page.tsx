import Button from "@/components/Buttons"
import Image from "next/image";
import profile from '../../public/IMG.jpg'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
    <h1 className="font-bold text-6xl text-red-700">
      Welcome Dear
    </h1>
    <Image src={profile} width={200} height={300} alt={""} ></Image>
    <p className="font-serif text-1xl text-green-300">

    Greedings My Name is Muhammad
    </p>
    <p className="font-serif text-1xl text-blue-300">
    My College id is 244401711
    </p>
    <p>
    
    I am Second year student of Fsc Pre Medical at Forman Christian College Lahore
    </p>
    <h2 className="font-bold text-6xl text-green-700">
      Extra Activities
    </h2>
    <p className="font-bold text-2xl text-yellow-400">
      President of Junior Biological Club in FCCU
      </p>
      <p className="font-bold text-2xl text-red-400">
      Speaker of Formanites Debating Society 
      </p>
      <p>
    I have also YouTube Channel name as Mian Muhammad Bodla 
     I am learning TypeScript, Python and Nextjs from PIAIC
    </p>
    <Button />
        <div>Vist My All Accounts<Button />
        </div>

    </main>
  );
}
