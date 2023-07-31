import { PluginItem } from "@babel/core";
import type { Identifier, VariableDeclaration } from "babel-types";

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
    return {
      visitor: {
        Program(path) {
          const body = path.node.body.filter(item =>
            t.isVariableDeclaration(item)
          ) as VariableDeclaration[];
          const names = body.map(item => {
            return (item.declarations[0].id as Identifier).name;
          });
          const v = t.expressionStatement(
            t.newExpression(t.identifier("Vue2"), [
              t.objectExpression([
                t.objectProperty(
                  t.identifier("render"),
                  t.memberExpression(
                    t.identifier("template"),
                    t.identifier("render")
                  )
                ),
                t.objectMethod(
                  "method",
                  t.identifier("setup"),
                  [],
                  t.blockStatement([
                    ...body,
                    t.returnStatement(
                      t.objectExpression([
                        ...names.map(name =>
                          t.objectProperty(
                            t.identifier(name),
                            t.identifier(name),
                            false,
                            true
                          )
                        ),
                      ])
                    ),
                  ])
                ),
              ]),
            ])
          );
          // @ts-ignore
          path.node.body = [v];
        },
      },
    };
  };
};

export { scriptPlugin, scriptSetupPlugin };
