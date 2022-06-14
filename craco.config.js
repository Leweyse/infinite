const path = require('path');

module.exports = {
    webpack: {
        alias: {
            '@/': path.resolve(__dirname, 'src'),
            '@/assets': path.resolve(__dirname, 'src/assets'),
            '@/models': path.resolve(__dirname, 'src/model'),
            '@/helpers': path.resolve(__dirname, 'src/helpers'),
            '@/services': path.resolve(__dirname, 'src/services'),
            '@/stores': path.resolve(__dirname, 'src/stores'),
            '@/components/blocks': path.resolve(
                __dirname,
                'src/components/blocks/index.ts'
            ),
            '@/components/containers': path.resolve(
                __dirname,
                'src/components/containers/index.ts'
            ),
            '@/components/layouts': path.resolve(
                __dirname,
                'src/components/layouts/index.ts'
            ),
            '@/pages': path.resolve(__dirname, 'src/pages/index.ts'),
        },
    },
};
