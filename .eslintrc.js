export default {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'no-console': 'warn', // Заборона використання console.log і т.п.
    'no-unused-vars': 'error', // Виявлення не використовуваних змінних
    indent: ['error', 2], // Дві пробіли на кожний рівень вкладення
    quotes: ['error', 'single'], // Одинарні лапки для рядків
  },
};
