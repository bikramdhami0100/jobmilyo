/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        config.cache = false; // Disable webpack caching
        return config;
      },
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
