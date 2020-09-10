import fs from "fs";
import path from "path";

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

let transFormExtra = (magicString, code, id) => {
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
};
export { transFormExtra };
