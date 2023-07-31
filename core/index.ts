import { parseComponent } from "vue-template-compiler";
import complierScript from "./complierScript";
import complierTemplate from "./complierTemplate";
import complierStyle from "./compilerStyle";

interface IParams {
  Vue?: any;
  ref?: any;
  reactive?: any;
  computed?: any;
  watch?: any;
}

type IResult = (params: IParams) => {
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
  const compilerResultScript = complierScript(scriptCode, isSetup);
  console.log("compilerResultScript", compilerResultScript);
  const compilerResultFunctions = complierTemplate(template);
  console.log("compilerResultFunctions", compilerResultFunctions);
  const compilerResultStyle = complierStyle(styles);
  console.log("compilerResultStyle", compilerResultStyle);

  const fn = new Function(
    "Vue2",
    "ref",
    "reactive",
    "computed",
    "watch",
    "render",
    `return ${compilerResultScript?.code}`
  );
  console.log("fn: ", fn);
  return (params: IParams) => {
    return {
      vm: fn.call(
        undefined,
        params.Vue,
        params.ref,
        params.reactive,
        params.computed,
        params.watch,
        compilerResultFunctions.code?.render
      ),
      style: compilerResultStyle.code,
    };
  };
};

export { startCompiler };
