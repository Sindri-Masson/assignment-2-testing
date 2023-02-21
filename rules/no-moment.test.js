import { test } from 'vitest'
import rule from '../rules/no-moment'
import { RuleTester } from 'eslint'

test('no-moment', () => {
    var ruleTester = new RuleTester()
    ruleTester.run('no-moment', rule, {
        valid: ['var a = 1'],
        invalid: [
            {
                code: 'moment()',
                errors: [
                    {
                        message: 'Unexpected use of Moment.js library.',
                    },
                ],
            },
        ],
    })
})
