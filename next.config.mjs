/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            hostname: "images.unsplash.com"
        }, {
            hostname: "s3-alpha-sig.figma.com"
        }]
    }
};

export default nextConfig;
