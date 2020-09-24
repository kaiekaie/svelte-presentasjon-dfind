import fs from 'fs';
import path from 'path';

String.prototype.replaceAll = function (find, replace) {
  return this.replace(new RegExp(find, 'g'), replace);
};

const extras = (data, id) => {
  let outputArray = [data];
  let imports = data.match(/\'(.+?\..+?)\'/gi);

  let outputData = `let codeData =[\`${data}\`];`;
  if (imports) {
    imports = imports.map((e) => e.replaceAll("'", ''));

    imports = imports.filter((e) => !e.includes('https'));
    imports = imports.filter((e) => !e.includes('data'));
    imports = imports.filter((e) => !e.includes('spinner'));
    imports = imports.map((e) => {
      let file = e;

      if (!file.includes('.svelte')) {
        file = file + '.ts';
      }
      let codePath = path.join(path.dirname(id), file);
      let filename = path.basename(codePath);
      let inputExample = fs.readFileSync(codePath).toString();
      inputExample = `${filename}\n${inputExample}`;
      return (e = inputExample);
    });
    outputArray = [...outputArray, ...imports];

    outputData = `let codeData = ${JSON.stringify(outputArray)}`;
  }

  return outputData;
};

let transFormExtra = (magicString, code, id) => {
  let filename = path.basename(id).replace('.', '');

  let data = fs.readFileSync(id).toString();
  data = data.replace('let codeData = [];', '');

  data = data.replace("import CodeComponent from '../components/codeComponent.svelte';", '');

  data = data.replace('<CodeComponent {codeData} />', '');
  data = filename + '\n' + data;

  let codestring = extras(data, id);
  code = code.replace('let codeData = [];', codestring);
  return code;
};

const testPlugin = () => {
  return {
    name: 'copy-worker',
    // highlight-start
    load() {},
    // highlight-end
    generateBundle(s) {},
  };
};

const nodeserve = () => {
  let server;

  return {
    // highlight-start
    load() {
      this.addWatchFile(path.resolve('./ssr/ssr.js'));
    },
    writeBundle() {
      if (server) {
        return;
      }
      server = require('child_process').exec(
        'nodemon --exec npm run nodestart',
        (error, stdout, stderr) => {
          if (error) {
            console.error(`exec error: ${error}`);
            return;
          }
          console.log(`stdout: ${stdout}`);
          console.error(`stderr: ${stderr}`);
        }
      );
    },
  };
};
export { transFormExtra, nodeserve, testPlugin };
