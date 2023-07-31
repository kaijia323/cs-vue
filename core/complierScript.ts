import { SFCBlock } from "vue-template-compiler";

const complierScript = (script?: SFCBlock, isSetup: boolean = false) => {
  console.log("complierScript", script, isSetup);
};

export default complierScript;
