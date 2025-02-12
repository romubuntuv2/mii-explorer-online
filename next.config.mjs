/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    env:{
        NEXT_PUBLIC_POCKETBASE_UR:'https://server.romubuntu.dev'
    }
};

export default nextConfig;
