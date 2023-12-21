
import Link from "next/link"
export default function setting () {return( <main>
    
    <h1 className="font-bold text-6xl text-red-500">Setting</h1>
    <p>passoword chayay</p>

<div className="bg-gray-700 px-5 py-5 flex gap-5">
    <Link href="/dashboard/setting/password">Password</Link>
    <Link href="/dashboard/setting/profile">Profile</Link>
</div>
</main>




)} 