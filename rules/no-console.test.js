import { test } from 'vitest'
import rule from '../rules/no-console'
import { RuleTester } from 'eslint'

test('no-console', () => {
    var ruleTester = new RuleTester()
    ruleTester.run('no-console', rule, {
        valid: ['var a = 1'],
        invalid: [
            {
                code: 'console.log("hello world")',
                errors: [
                    {
                        message: 'Unexpected console.log statement.',
                    },
                ],
            },
        ],
    })
})
