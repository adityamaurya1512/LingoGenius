import {auth} from "@clerk/nextjs/server"


const  adminId="user_2j5cS3Ljjrtz8WEXMUDp8Hcdsfh"


export const getIsAdmin=()=>{
    const {userId}= auth();
    if(!userId)
        return false;
   return userId===adminId
}
