import {
  SFCBlock,
  compileToFunctions,
  CompiledResultFunctions,
} from "vue-template-compiler";

interface IResult {
  code: CompiledResultFunctions | null;
}

const complierTemplate = (template?: SFCBlock): IResult => {
  if (!template) return { code: null };
  const res = compileToFunctions(template?.content);
  return {
    code: res,
  };
};

export default complierTemplate;
