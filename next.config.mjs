/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: ['three'],
    env:{
        NEXT_PUBLIC_POCKETBASE_UR:'https://server.romubuntu.dev',
        SOCKET_URL:'https://server.romubuntu.dev:3001'
    },
    compiler: {
        styledComponents: true,
      },
};

export default nextConfig;
