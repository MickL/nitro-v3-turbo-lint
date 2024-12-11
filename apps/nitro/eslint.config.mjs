import turbo from "eslint-plugin-turbo";

export default [
    {
        files: ['**/*.ts'],
        plugins: {
            turbo,
        },
        rules: {
            "turbo/no-undeclared-env-vars": "error",
        },
    },
];