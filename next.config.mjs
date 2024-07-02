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
    images:{domains:["lh3.googleusercontent.com","avatars.githubusercontent.com","images.unsplash.com","res.cloudinary.com","cdn-icons-png.flaticon.com"]}
};

export default nextConfig;
