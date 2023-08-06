import { PluginItem } from "@babel/core";
import type {
  Identifier,
  ImportDeclaration,
  VariableDeclaration,
} from "babel-types";

type MyPlugin = (item: { types: typeof import("babel-types") }) => PluginItem;

const scriptPlugin = (): MyPlugin => {
  return ({ types: t }) => {
    console.log(t);
    return {
      visitor: {},
    };
  };
};

const scriptSetupPlugin = (template: string): MyPlugin => {
  return ({ types: t }) => {
    return {
      visitor: {
        Program(path) {
          const body = path.node.body.filter(
            item => !t.isImportDeclaration(item)
          ) as VariableDeclaration[];
          const imports = path.node.body.filter(item =>
            t.isImportDeclaration(item)
          ) as ImportDeclaration[];
          const names = body
            .filter(item => t.isVariableDeclaration(item))
            .map(item => {
              return (item.declarations[0].id as Identifier).name;
            });
          const v = t.expressionStatement(
            t.callExpression(
              t.memberExpression(
                t.newExpression(t.identifier("Vue"), [
                  t.objectExpression([
                    t.objectProperty(
                      t.identifier("el"),
                      t.identifier(JSON.stringify("#app"))
                    ),
                    t.objectProperty(
                      t.identifier("template"),
                      t.identifier(JSON.stringify(template)),
                      false,
                      false
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
                ]),
                t.identifier("$mount")
              ),
              []
            )
          );
          // @ts-ignore
          path.node.body = [...imports, v];
        },
      },
    };
  };
};

export { scriptPlugin, scriptSetupPlugin };
