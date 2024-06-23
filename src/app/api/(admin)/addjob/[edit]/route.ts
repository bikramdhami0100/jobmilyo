import AddJob from "@/app/mongodb/AddJobSchema";
import Usersignup from "@/app/mongodb/SignUpSchema";
import mongodbconn from "@/app/mongodb/connection";
import { Schema } from "mongoose";
import { NextResponse } from "next/server";


export async function GET(req:any) {

    await mongodbconn; 
     const data=new URL(req.url);
     const id = data.searchParams.get("jobId");

    console.log(id)
   const result=await AddJob.findById(id);


   return NextResponse.json({message:"success",data:result});
    
  }