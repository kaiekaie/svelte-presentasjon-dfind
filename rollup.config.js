import svelte from "rollup-plugin-svelte";
import commonjs from "@rollup/plugin-commonjs";
import livereload from "rollup-plugin-livereload";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import serve from "rollup-plugin-serve";
import fs from "fs";
import path from "path";
import { transform } from "rollup-plugin-insert";

const production = !process.env.ROLLUP_WATCH;
const svelteoptions = require("./svelte.config");

export default {
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
    transform(
      (magicString, code, id) => {
        let filename = path.basename(id).replace(".", "");
        let data = fs.readFileSync(id).toString();
        data = data.replace("let codeData = [];", "");

        data = data.replace(
          "import CodeComponent from '../components/codeComponent.svelte';",
          "",
        );

        data = data.replace("<CodeComponent {codeData} />", "");
        data = filename + "\n" + data;
        let codestring = extras(data, id);
        code = code.replace("let codeData = [];", codestring);
        return code;
      },
      {
        include: ["**/tabs/example*.svelte"],
      },
    ),
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

const extras = (data, id) => {
  let inputExample = "";
  switch (true) {
    case data.includes("'../components/inputExample.svelte'"):
      inputExample = fs
        .readFileSync(
          path.join(
            path.dirname(id),
            "..",
            "components",
            "inputExample.svelte",
          ),
        )
        .toString();
      return `
          let codeData =[\`${data}\`,\`${inputExample}\`];
        `;
    case data.includes("'../components/inputExampleStore.svelte'"):
      inputExample = fs
        .readFileSync(
          path.join(
            path.dirname(id),
            "..",
            "components",
            "inputExampleStore.svelte",
          ),
        )
        .toString();
      return `
          let codeData =[\`${data}\`,\`${inputExample}\`];
        `;
    default:
      return `
          let codeData =[\`${data}\`];`;
  }
};
