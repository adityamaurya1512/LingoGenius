import dynamic from "next/dynamic";
const App=dynamic(()=>import("./app"),{ssr:false});

import { getIsAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";

const AdminPage=async()=>{
    const isAdmin= getIsAdmin();
    if(!isAdmin)
        redirect("/")
    return (
        <App/>
    )
}


export default AdminPage