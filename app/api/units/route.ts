import {NextResponse} from "next/server"
import db from "@/db/drizzle"
import {units} from "@/db/schema"
import { getIsAdmin } from "@/lib/admin"

export const GET=async()=>{
    if(!getIsAdmin())
        return new NextResponse("Unauthorized",{status:403})
    const data = await db.query.units.findMany();

    return NextResponse.json(data)
}

export const POST=async(req:Request)=>{
    if(!getIsAdmin())
        return new NextResponse("Unauthorized",{status:403})

    const body=await req.json()
    const data = await db.insert(units).values({
        ...body,

    }).returning();

    return NextResponse.json(data[0])
}