/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        remotePatterns: [{
            hostname: "images.unsplash.com"
        }, {
            hostname: "s3-alpha-sig.figma.com"
        }]
    }
};

export default nextConfig;
