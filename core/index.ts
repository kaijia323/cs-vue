import { parseComponent } from "vue-template-compiler";
import complierScript from "./complierScript";
import complierTemplate from "./complierTemplate";
import complierStyle from "./compilerStyle";

const startCompiler = (content: string) => {
  const sfcDescriptor = parseComponent(content);
  console.log("sfcDescriptor", sfcDescriptor);
  // @ts-ignore
  const { script, scriptSetup, template, styles } = sfcDescriptor;
  const scriptCode = script || scriptSetup;
  const isSetup = script ? false : scriptSetup.setup;
  complierScript(scriptCode, isSetup);
  const compilerResultFunctions = complierTemplate(template);
  console.log("compilerResultFunctions", compilerResultFunctions);
  const compilerResultStyle = complierStyle(styles);
  console.log("compilerResultStyle", compilerResultStyle);
};

export { startCompiler };
