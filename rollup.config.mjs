import { defineConfig } from 'rollup';
import { dts } from 'rollup-plugin-dts';
import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default defineConfig([
  {
    input: './src/index.ts',
    plugins: [
      nodeResolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', sourceMap: true })
    ],
    external: ['vite'],
    output: [
      {
        file: './dist/index.mjs',
        format: 'es'
      },
      {
        file: './dist/index.cjs',
        format: 'cjs'
      }
    ]
  },
  {
    input: './src/index.ts',
    plugins: [dts()],
    output: [
      {
        file: './dist/index.d.mts',
        format: 'esm'
      },
      {
        file: './dist/index.d.cts',
        format: 'commonjs'
      }
    ]
  }
]);
