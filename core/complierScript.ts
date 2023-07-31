// 先处理 setup 语法

import { SFCBlock } from "vue-template-compiler";
import { transform } from "@babel/standalone";
import { scriptSetupPlugin } from "./plugins/js";

const complierScript = (script?: SFCBlock, isSetup: boolean = false) => {
  if (!script)
    return {
      code: null,
    };
  if (isSetup) {
    _complierSetup(script.content);
  }
};

const _complierSetup = (content: string) => {
  const s = transform(content, {
    presets: [["es2016"]],
    plugins: [scriptSetupPlugin()],
  });
  console.log(s.code);
};

export default complierScript;
