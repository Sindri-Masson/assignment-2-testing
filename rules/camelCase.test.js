import { test } from "vitest";
import rule from "../rules/camelCase";
import { RuleTester } from "eslint";

test("camelCase", () => {
  const ruleTester = new RuleTester({
    parserOptions: {
      ecmaVersion: 2021,
    },
  });

  ruleTester.run("camelCase", rule, {
    valid: [
      "function myFunction() { }",
      "const myVariable = function myFunction() { }",
    ],
    invalid: [
      {
        code: "function my_function() { }",
        errors: [
          {
            messageId: "camelCase",
            data: {
              name: "my_function",
            },
          },
        ],
      },
    ],
  });
});
