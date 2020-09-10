const production = !process.env.ROLLUP_WATCH;
const preProcess = require('svelte-preprocess');
const transformSync = require('@swc/core');

module.exports = {
  dev: !production,

  preprocess: preProcess({
    scss: {
      includePaths: ['src'],
    },
    async typescript({ content }) {
      const { code } = await transformSync.transform(content, {
        jsc: {
          target: 'es2019',
          parser: { syntax: 'typescript' },
        },
      });

      return { code };
    },
    postcss: {
      inject: { insertAt: 'top' },
      plugins: [require('autoprefixer')],
    },
  }),
};
