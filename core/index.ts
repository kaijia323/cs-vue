import { parseComponent } from "vue-template-compiler";
import complierScript from "./complierScript";

const startCompiler = (content: string) => {
  console.log(content);
  const sfcDescriptor = parseComponent(content);
  console.log("sfcDescriptor", sfcDescriptor);
  // @ts-ignore
  const { script, scriptSetup } = sfcDescriptor;
  const scriptCode = script || scriptSetup?.content || "";
  const isSetup = script ? false : scriptSetup.setup;
  complierScript(scriptCode, isSetup);
};

export { startCompiler };
