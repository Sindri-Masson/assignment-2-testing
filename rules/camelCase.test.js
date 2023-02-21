import { test } from "vitest";
import rule from "../rules/camelCase";
import { RuleTester } from "eslint";

test("camelCase", () => {
  var ruleTester = new RuleTester();
  ruleTester.run("camelCase", rule, {
    valid: ["camelCase", "rule", "bingoBongo"],
    invalid: [
      {
        code: "camel_case",
        errors: [
          {
            message: 'Identifier "camel_case" is not in camelCase.',
          },
        ],
      },
    ],
  });
});
