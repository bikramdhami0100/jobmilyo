const jwt=require("jsonwebtoken");
export async function MiddlewareFun({token}:any) {
    console.log("token se " ,token)
}