import { NextRequest, NextResponse } from 'next/server';
const jwt=require("jsonwebtoken");

const SECRET_KEY = process.env.TOKEN_SECRETKEY || 'secretkeybikramdhami';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const tokencookie=req.cookies.get("token")?.value;
    const token = searchParams.get("token")
    if (!token) {
        return NextResponse.json({ message: 'Token not provided', status: 400 });
    }

    try {
      if (tokencookie==token) {
        const respon =NextResponse.json({ message: 'Logged out successfully', status: 200 })
         respon.cookies.delete("token");
         return respon;
        
      }

    } catch (error) {
        return NextResponse.json({ message: 'Invalid token', status: 401 });
    }
}

// export async function POST(req: NextRequest) {
//     const { searchParams } = new URL(req.url);
//     const token = searchParams.get('token');

//     if (!token) {
//         return NextResponse.json({ message: 'Token not provided', status: 400 });
//     }

//     try {
//         jwt.verify(token, SECRET_KEY);
//         // Invalidate the token or remove session as per your logic
//         return NextResponse.json({ message: 'Logged out successfully', status: 200 });
//     } catch (error) {
//         return NextResponse.json({ message: 'Invalid token', status: 401 });
//     }
// }