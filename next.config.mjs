/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    env:{
        NEXT_PUBLIC_POCKETBASE_UR:'https://server.romubuntu.dev',
        SOCKET_URL:'http://server.romubuntu.dev:3001'
    }
};

export default nextConfig;
