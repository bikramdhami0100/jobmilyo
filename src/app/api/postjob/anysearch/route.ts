import Usersignup from "@/app/mongodb/SignUpSchema";
import UserPostedJob from "@/app/mongodb/UserPostedJob";
// import { UserPostedJob } from "@/app/mongodb/UserPostedJob";
import mongodbconn from "@/app/mongodb/connection";
import { NextResponse } from "next/server";
const jwt = require("jsonwebtoken");

export async function POST(req: any) {
    await mongodbconn;
    const { searchText, page,limit } = await req.json();
    const skip = (page - 1) * limit;
    const token = req.cookies.get("token")?.value;
    // console.log(token)

    const decoded = jwt.verify(token, process.env.TOKEN_SECRETKEY);
    const userdetail = decoded.encodeemail;
    if (!token) {
        return NextResponse.json({ message: "Invalid token", status: 401 });

    }
    try {

        const searchRegex = new RegExp(searchText, 'i');  // Case-insensitive search
        const jobs = await UserPostedJob.find({
            $or: [
                {postedby:searchRegex},
                { address: searchRegex },

                { company: searchRegex },
                { description: searchRegex },
                { email: searchRegex },
                { experience: searchRegex },
                { industry: searchRegex },
                { interestedEmploymentTypes: searchRegex },
                { category: searchRegex },
                { jobtitle: searchRegex },
                { qualification: searchRegex },
                { salary: searchRegex },
                { site: searchRegex },
                { specialization_req: searchRegex },
                { state: searchRegex },
                { website_url: searchRegex },
                

            ]
     },
    
    
    ).sort({ jobupload: -1 }).populate({ path: "user", select: "fullName  email color" }).skip(skip).limit(limit);

        // Filter jobs based on user.fullName after populating
        //  jobs.filter(job => searchRegex.test(job.user.fullName));
        const totalJobs = await UserPostedJob.countDocuments({
            $or: [
                { address: searchRegex },
                { company: searchRegex },
                { description: searchRegex },
                { email: searchRegex },
                { experience: searchRegex },
                { industry: searchRegex },
                { interestedEmploymentTypes: searchRegex },
                { category: searchRegex },
                { jobtitle: searchRegex },
                { qualification: searchRegex },
                { salary: searchRegex },
                { site: searchRegex },
                { specialization_req: searchRegex },
                { state: searchRegex },
                { website_url: searchRegex }
            ],
          
        });

        return NextResponse.json({
            message: "Successfully inserted job", status: 200, search: jobs, totalJobs,
            totalPages: Math.ceil(totalJobs / limit),
            currentPage: page
        });
    } catch (error) {
        return NextResponse.json({ message: error })
    }

}

// another way
// import Usersignup from "@/app/mongodb/SignUpSchema";
// import UserPostedJob from "@/app/mongodb/UserPostedJob";
// import mongodbconn from "@/app/mongodb/connection";
// import { NextRequest, NextResponse } from "next/server";
// const jwt = require("jsonwebtoken");

// export async function POST(req: NextRequest) {
//     await mongodbconn;
//     const { searchText, page, limit } = await req.json();
//     const skip = (page - 1) * limit;
//     const token = req.cookies.get("token")?.value;

//     if (!token) {
//         return NextResponse.json({ message: "Invalid token", status: 401 });
//     }

//     const decoded = jwt.verify(token, process.env.TOKEN_SECRETKEY);
//     const userdetail = decoded.encodeemail;

//     try {
//         const searchRegex = new RegExp(searchText, 'i');  // Case-insensitive search

//         const jobs = await UserPostedJob.aggregate([
//             {
//                 $match: {
//                     $or: [
//                         { address: searchRegex },
//                         { company: searchRegex },
//                         { description: searchRegex },
//                         { email: searchRegex },
//                         { experience: searchRegex },
//                         { industry: searchRegex },
//                         { interestedEmploymentTypes: searchRegex },
//                         { category: searchRegex },
//                         { jobtitle: searchRegex },
//                         { qualification: searchRegex },
//                         { salary: searchRegex },
//                         { site: searchRegex },
//                         { specialization_req: searchRegex },
//                         { state: searchRegex },
//                         { website_url: searchRegex }
//                     ]
//                 }
//             },
//             {
//                 $lookup: {
//                     from: "usersignups", // The name of the User collection in your database
//                     localField: "user",
//                     foreignField: "_id",
//                     as: "user"
//                 }
//             },
//             {
//                 $unwind: "$user"
//             },
//             {
//                 $match: {
//                     "user.fullName": searchRegex // Assuming searchRegex is the regex you want to match against user fullName
//                 }
//             },
//             {
//                 $sort: { jobupload: -1 }
//             },
//             {
//                 $skip: skip
//             },
//             {
//                 $limit: limit
//             },
//             {
//                 $project: {
//                     address: 1,
//                     company: 1,
//                     description: 1,
//                     email: 1,
//                     experience: 1,
//                     industry: 1,
//                     interestedEmploymentTypes: 1,
//                     category: 1,
//                     jobtitle: 1,
//                     qualification: 1,
//                     salary: 1,
//                     site: 1,
//                     specialization_req: 1,
//                     state: 1,
//                     website_url: 1,
//                     jobupload: 1,
//                     user: { fullName: 1, email: 1, color: 1 }
//                 }
//             }
//         ]);

//         const totalJobs = await UserPostedJob.aggregate([
//             {
//                 $match: {
//                     $or: [
//                         { address: searchRegex },
//                         { company: searchRegex },
//                         { description: searchRegex },
//                         { email: searchRegex },
//                         { experience: searchRegex },
//                         { industry: searchRegex },
//                         { interestedEmploymentTypes: searchRegex },
//                         { category: searchRegex },
//                         { jobtitle: searchRegex },
//                         { qualification: searchRegex },
//                         { salary: searchRegex },
//                         { site: searchRegex },
//                         { specialization_req: searchRegex },
//                         { state: searchRegex },
//                         { website_url: searchRegex }
//                     ]
//                 }
//             },
//             {
//                 $lookup: {
//                     from: "usersignups",
//                     localField: "user",
//                     foreignField: "_id",
//                     as: "user"
//                 }
//             },
//             {
//                 $unwind: "$user"
//             },
//             {
//                 $match: {
//                     "user.fullName": searchRegex
//                 }
//             },
//             {
//                 $count: "totalJobs"
//             }
//         ]);

//         const totalJobsCount = totalJobs.length > 0 ? totalJobs[0].totalJobs : 0;

//         return NextResponse.json({
//             message: "Successfully retrieved jobs",
//             status: 200,
//             search: jobs,
//             totalJobs: totalJobsCount,
//             totalPages: Math.ceil(totalJobsCount / limit),
//             currentPage: page
//         });
//     } catch (error: any) {
//         return NextResponse.json({ message: error.message, status: 500 });
//     }
// }
