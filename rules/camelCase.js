module.exports = {
    meta: {
        messages: {
            camelCase: 'Identifier "{{name}}" is not in camelCase.',
        },
    },
    create(context) {
        return {
            Identifier(node) {
                if (!node.name.match(/^[a-z]+([A-Z][a-z]+)*$/)) {
                    context.report({
                        node,
                        messageId: 'camelCase',
                        data: {
                            name: node.name,
                        },
                    })
                }
            },
        }
    },
}
