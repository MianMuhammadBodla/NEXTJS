import Image from "next/image";
import sad from "@/assets/images/sad.jpg"
function Dispalydata (){

    const user = {
 name: "Mian Muhammad Bodla",
 role: "Admin",
 age: 17,
 email:"mianmuhammadbodla@gmail.com",
 imageUrl:"https://pbs.twimg.com/profile_images/1718190643816611840/iSSRthmG_400x400.jpg",
 imagesize:90,

    }
        return (
            <div className="mt-2">
                My user info
                <div>Name:{user.name}</div>
                <div>Role:{user.role}</div>
                <div>Age:{user.age}</div>
                <div>Email:{user.email}</div>
              <div className="flex gap-5">
                <Image
                className="rounded-full"
                 src={user.imageUrl} 
                 alt=""
                width={100}
                height={100}                
                
                />
                  <Image
                className="rounded-full"
                 src={sad} 
                 alt=""
            width={100}
                height={100}                
                
                />

              
         </div>
            </div>
        );
    }


export default Dispalydata;