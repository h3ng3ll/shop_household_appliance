import { Exception } from "sass";
import {$host , $authHost} from "./index"

import { jwtDecode } from "jwt-decode";
import { UserData } from "models/interfaces/UserData";

export const register = async (email : string , password : string , firstname : string , lastname : string) : Promise<Record<string , any>>  => {
    const {data} = await $host.post("api/user/register", {email , password , firstname , lastname , role: process.env.USER});
    localStorage.setItem("token" , data);
    return jwtDecode(data); 
}


export const login = async (email : string , password : string ) => {
    const {data} = await $host.post("api/user/login" , {email , password })
    localStorage.setItem("token" , data);
     return jwtDecode(data);
}

export const check = async () :  Promise<Record<string , any> | undefined>  => {
    
  try {
    const {data} = await $authHost.post("api/user/auth")
    localStorage.setItem("token" , data);
    return jwtDecode(data)
  } catch(e : any) {
    console.log(e.toString());
  }

}

export const updateCredentials = async (user : UserData) :  Promise<Record<string , any> | undefined>  => {
    
  
      const {data} = await $authHost.post("api/user/updateCredentials" , {
        user_id : user.user_id,
        firstname: user.name,
        lastname : user.surname,
        role : user.role!,
        birthday: user.birthday,
        email : user.email,
      })
      localStorage.setItem("token" , data);
      return jwtDecode(data)
   
  
  }
