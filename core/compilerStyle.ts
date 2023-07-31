// 暂时不处理 scoped 和 预处理器

import type { SFCBlock } from "vue-template-compiler";

const complierStyle = (styles: SFCBlock[]) => {
  console.log("compilerStyle", styles);
  return {
    code: styles.map(style => style.content).join("\n\n"),
  };
};

export default complierStyle;
