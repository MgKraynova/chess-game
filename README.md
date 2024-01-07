# React + TypeScript + Vite

Шахматы сделаны по уроку Ulbi TV "Шахматы на React и TypeScript С НУЛЯ. Практикуем ООП".

Дополнительно к уроку:
- [x] - сделан рефакторинг кода: изменены названия констант и методов, часть логики вынесена в дополнительные константы и методы
- [x] - добавлена логика ходов короля


Что можно добавить:
- выводить сообщение о проигрыше, когда закончился таймер
- добавить координаты на доску
- добавить логику с шахом (проверять внутри canMove находится ли король под угрозой) и матом (если король под атакой, и он больше не может никуда сходить)
- отображать историю ходов
- поменять дизайн


This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
