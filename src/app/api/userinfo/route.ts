import Usersignup from "@/app/mongodb/SignUpSchema";
import UserInformation from "@/app/mongodb/UserInformationSchema";
import mongodbconn from "@/app/mongodb/connection";
import { NextResponse } from "next/server";
var jwt = require('jsonwebtoken');
// {
//   userId: userId,
//   firstName: 'John',
//   middleName: 'M',
//   lastName: 'Doe',
//   gender: 'Male',
//   profile: 'profile.jpg',
//   phoneNumber: '1234567890',
//   permanentAddress: '123 Main St, Hometown',
//   currentAddress: '456 Second St, Big City',
//   educationInformation: [{
//     skill: ['JavaScript', 'React'],
//     boardName: 'XYZ Board',
//     level: 'Bachelors',
//     faculty: 'Computer Science',
//     educationType: 'Full-time',
//     gpaOrPercentage: '3.8 GPA',
//     passedDate: new Date('2012-05-01'),
//     marksheet: 'marksheet.pdf'
//   }],
//   employmentInformation: [{
//     previousCompany: 'ABC Corp',
//     previousRole: 'Software Engineer',
//     interestedCategory: 'IT',
//     interestedField: 'Development',
//     interestedEmploymentType: 'Full-time',
//     expectedPositionLevel: 'Senior',
//     uploadedCv: 'cv.pdf'
//   }]
// }
export async function POST(req: any) {
     await mongodbconn;
const userinformation=await req.json();

     const data=await req.cookies.get("token");
     const token=data.value
     console.log(token);
     if (!token) {
        return NextResponse.json({ message: "Token not found", status: 400 });
    }

     var decoded = jwt.verify(token, 'secretkeybikramdhami');
     let  email = decoded.encodeemail;
     const user = await Usersignup.findOne(
            { email },
        ); 
     

         let  userId=user._id;
     try {
        const newUserInfo = new UserInformation({
            userId: userId,
            fname: userinformation.fname,
            gender: userinformation.gender,
            phone: userinformation.phone,
            PermanentAddress: userinformation.PermanentAddress,
            CurrentAddress: userinformation.CurrentAddress,
            profile: userinformation.profile,
            boardName: userinformation.boardName,
            level: userinformation.level,
            faculity: userinformation.faculity,
            educationtype: userinformation.educationtype,
            gpaorpercentage: userinformation.gpaorpercentage,
            passedDate: userinformation.passedDate,
            marksheet: userinformation.marksheet,
            previouscompany: userinformation.previouscompany,
            previousrole: userinformation.previousrole,
            interestedCategory: userinformation.interestedCategory,
            interestedFiels: userinformation.interestedFiels,
            interestedEmploymentType: userinformation.interestedEmploymentType,
            expectedPositionLevel: userinformation.expectedPositionLevel,
            uploadCV: userinformation.uploadCV,
            dateofBirth: userinformation.dateofBirth
        });
        
          console.log(newUserInfo);
       let userinforesult= await newUserInfo.save();
        const userinfoid=userinforesult._id;
        let userinfotoken=jwt.sign({ userinfoid:userinfoid  }, 'secretkeybikramdhami');
        let respon=NextResponse.json({ message: "User Information  successfully inserted ", status: 200 });
        respon.cookies.set("userinfotoken",userinfotoken,{httpOnly:true});
        return respon;
        
     } catch (error) {
         console.log(error)
     }
         
        

        // if (!user) {
        //     return NextResponse.json({ message: "User not found", status: 404 });
        // }
        let respon=NextResponse.json({ message: " successfully inserted data", status: 200 });
        // respon.cookies.set("userinfotoken",token,{httpOnly:true});
        return respon;
 }
 