/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
        serverComponentsExternalPackages:["mongoose"]
    },
    // images:{
    //     remotePatterns:[
           
    //     ]
    // }
    images:{domains:["lh3.googleusercontent.com","avatars.githubusercontent.com","images.unsplash.com","res.cloudinary.com"]}
};

export default nextConfig;
