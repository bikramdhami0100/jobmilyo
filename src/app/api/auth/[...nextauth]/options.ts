import type { NextAuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
export const options:NextAuthOptions={
    providers:[
           GithubProvider({
           
            clientId:process.env.GITHUB_ID as string,
            clientSecret:process.env.GITHUB_SECRET as string
           }),
           GoogleProvider({
            clientId:process.env.GOOGLE_CLIENT_ID as string,
             clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
            //  authorization: {
            //     params: {
            //       scope: 'openid profile email https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/user.birthday.read',
            //     },
            //   },    
            })
                    
    ],

    callbacks: {
    async signIn({user,account}:any){
        console.log(user)
        console.log(account)
        return user;
    }
    }
    
}