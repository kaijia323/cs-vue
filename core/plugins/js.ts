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
      visitor: {
        Program(path) {
          const body = path.node.body.filter(item =>
            t.isVariableDeclaration(item)
          );
          console.log(body);
          // const names = body.map(item => {
          //   return item.type === "VariableDeclaration"
          //     ? item.declarations[0].type === "VariableDeclarator" &&
          //         item.declarations[0].id.name
          //     : "";
          // });
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
                    // @ts-ignore
                    ...body,
                    // return
                    // @ts-ignore
                    t.returnStatement(
                      t.objectExpression([
                        t.objectProperty(
                          t.identifier("a"),
                          t.identifier("a"),
                          false,
                          true
                        ),
                        t.objectProperty(
                          t.identifier("handleClick"),
                          t.identifier("handleClick"),
                          false,
                          true
                        ),
                      ])
                    ),
                  ])
                ),
              ]),
            ])
          );
          console.log(v);
          // @ts-ignore
          path.node.body = [v];
        },
      },
    };
  };
};

export { scriptPlugin, scriptSetupPlugin };
