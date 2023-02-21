module.exports = {
    meta: {
        messages: {
            noConsole: 'Unexpected console.log statement.',
        },
    },
    create(context) {
        return {
            CallExpression(node) {
                const { callee } = node
                if (
                    callee.type === 'MemberExpression' &&
                    callee.object.name === 'console' &&
                    callee.property.name === 'log'
                ) {
                    context.report({
                        node,
                        messageId: 'noConsole',
                    })
                }
            },
        }
    },
}
