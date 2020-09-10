import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";

import { transform } from "rollup-plugin-insert";
import { transFormExtra } from "./plugins/index";

const production = !process.env.ROLLUP_WATCH;
const svelteoptions = require("./svelte.config");

let regular = {
  input: "src/main.ts",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "public/build/bundle.js",
  },
  plugins: [
    svelte(svelteoptions),
    commonjs(),
    resolve(),
    !production && livereload("public"),
    production && terser(),
    typescript({ sourceMap: !production }),
    transform(transFormExtra, {
      include: ["**/tabs/example*.svelte"],
    }),
    !production &&
    serve({
      contentBase: "public",
      port: 1337,
      open: true,
      historyApiFallback: true,
    }),
  ],
  watch: {
    clearScreen: false,
  },
};

let ssr = {
  input: "ssr/public/index.html",
  output: {
    sourcemap: true,
    format: "iife",
    name: "app",
    file: "ssr/public/build/bundle.js",
    exports: "auto",
  },
  plugins: [
    svelte(),
    commonjs(),
    resolve(),
  ],
};
export default [regular, ssr];
