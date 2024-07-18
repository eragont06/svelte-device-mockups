import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import sveltePreprocess from 'svelte-preprocess';

export default {
  input: 'src/lib/index.js',
  output: [
    { file: 'dist/index.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'esm' }
  ],
  plugins: [
    svelte({
      preprocess: sveltePreprocess(),
    }),
    resolve(),
    commonjs(),
    terser()
  ]
};
