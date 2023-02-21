module.exports = {
    meta: {
        messages: {
            noMoment: 'Unexpected use of Moment.js library.',
        },
    },
    create(context) {
        return {
            CallExpression(node) {
                if (node.callee.name === 'moment') {
                    context.report({
                        node,
                        messageId: 'noMoment',
                    })
                }
            },
        }
    },
}
