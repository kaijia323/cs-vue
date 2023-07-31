import { PluginItem } from "@babel/core";

type MyPlugin = (item: { types: typeof import("babel-types") }) => PluginItem;

const scriptPlugin = (): MyPlugin => {
  return ({ types: t }) => {
    console.log(t);
    return {
      visitor: {},
    };
  };
};

const scriptSetupPlugin = (): MyPlugin => {
  return ({ types: t }) => {
    console.log(t);
    return {
      visitor: {},
    };
  };
};

export { scriptPlugin, scriptSetupPlugin };
