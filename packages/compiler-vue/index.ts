import { parseComponent } from "vue-template-compiler";
import complierScript from "./compilerScript";
import complierStyle from "./compilerStyle";

type IResult = {
  vm: any;
  style: string;
};

const startCompiler = (content: string): IResult => {
  const sfcDescriptor = parseComponent(content);
  console.log("sfcDescriptor", sfcDescriptor);
  // @ts-ignore
  const { script, scriptSetup, template, styles } = sfcDescriptor;
  const scriptCode = script || scriptSetup;
  const isSetup = script ? false : scriptSetup.setup;
  const compilerResultScript = complierScript(
    scriptCode,
    template?.content,
    isSetup
  );
  console.log("compilerResultScript", compilerResultScript);
  const compilerResultStyle = complierStyle(styles);
  console.log("compilerResultStyle", compilerResultStyle);
  return {
    vm: compilerResultScript?.code,
    style: compilerResultStyle.code,
  };
};

export { startCompiler };
