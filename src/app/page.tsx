import Button from "@/components/Buttons"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-5">
    <h1 className="font-bold text-6xl text-green-700">
      Hello World 
    </h1>
    <p>
     Greedings Everyone My Name is Muhammad I am Second year student of Fsc Pre Medical at Forman Christian College Lahore
     I have also YouTube Channel name as MianMuhammadBodla
     I am also learning TypeScript and Nextjs from PIAIC
    </p>
    <Button />
        <div>Subscribe<Button />
        </div>

    </main>
  );
}