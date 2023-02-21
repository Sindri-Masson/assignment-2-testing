module.exports = {
  meta: {
    messages: {
      camelCase: 'Identifier "{{name}}" is not in camel-case.',
    },
  },
  create(context) {
    return {
      FunctionDeclaration(node) {
        console.log(node.id.name.substring(1));
        if (node.id.name.includes("_")) {
          context.report({
            node,
            messageId: "camelCase",
            data: {
              name: node.id.name,
            },
          });
        }
      },
    };
  },
};
