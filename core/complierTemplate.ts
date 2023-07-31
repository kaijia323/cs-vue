import { SFCBlock } from "vue-template-compiler";

const complierTemplate = (template?: SFCBlock) => {
  console.log("compilerTemplate", template);
};

export default complierTemplate;
