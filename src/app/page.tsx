import Button from "@/components/Buttons"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
    <h1 className="font-bold text-6xl text-red-700">
      Hello World
    </h1>
    <p className="font-serif text-1xl text-green-300">

    Greedings Everyone My Name is Muhammad
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
     I am also learning TypeScript and Nextjs from PIAIC
    </p>
    <Button />
        <div>Vist My All Accounts<Button />
        </div>

    </main>
  );
}
