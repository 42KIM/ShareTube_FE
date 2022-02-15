/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // 테스트 이미지 도메인
    domains: ['cdn.pixabay.com']
  }
};

module.exports = nextConfig;
