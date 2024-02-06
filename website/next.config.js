/** @type {import('next').NextConfig} */

if (
    process.env.LD_LIBRARY_PATH == null ||
    !process.env.LD_LIBRARY_PATH.includes(
        `${process.env.PWD}/node_modules/canvas/build/Release:`,
    )
) {
    process.env.LD_LIBRARY_PATH = `${process.env.PWD
        }/node_modules/canvas/build/Release:${process.env.LD_LIBRARY_PATH || ''}`;
}

const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'pub-3626123a908346a7a8be8d9295f44e26.r2.dev',
            },
        ],
    },
    webpack: (config) => {
        config.externals = [...config.externals, { canvas: "canvas" }];  // required to make Konva & react-konva work
        return config;
    },
}

module.exports = nextConfig
