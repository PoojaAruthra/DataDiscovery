module.exports = {
  root: true,
  overrides: [
    {
      files: [
        '*.ts'
      ],
      parserOptions: {
        project: [
          'tsconfig.json',
          'tsconfig.app.json',
          'tsconfig.spec.json',
          'e2e/tsconfig.json'
        ],
        tsconfigRootDir: __dirname
      },
      extends: [
        './node_modules/@simpl/lint/eslint-config-angular-typescript-base.json'
      ],
      rules: {
        '@angular-eslint/directive-selector': [
          'error',
          {
            'type': 'attribute',
            'prefix': 'app',
            'style': 'camelCase'
          }
        ],
        '@angular-eslint/component-selector': [
          'error',
          {
            'type': 'element',
            'prefix': 'app',
            'style': 'kebab-case'
          }
        ]
      }
    },
    {
      files: [
        '*.html'
      ],
      extends: [
        './node_modules/@simpl/lint/eslint-config-angular-template-base.json'
      ],
      rules: {}
    }
  ]
};
