import type { SFCBlock } from "vue-template-compiler";

const complierStyle = (styles: SFCBlock[]) => {
  console.log("compilerStyle", styles);
};

export default complierStyle;
