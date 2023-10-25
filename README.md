# Desktop App with Angular using Electron

```bash
npm install -g npm
npm install -g @angular/cli
ng new ng-electron
ng add @angular/material
gh auth login


npm install electron --save-dev
npm install cross-var --save-dev
npm install concurrently --save-dev
npm install electron-packager  --save-dev

npm run start

npm run package:all

```

## [Bad practices you should avoid using Angular](https://levelup.gitconnected.com/bad-practices-you-should-avoid-with-angular-development-58098e5542d5)

- Don’t do: Put the logic being handled in tap with empty subscribe
- Don’t do ❌: Error functions in a subscription are just a console.error
- Don’t do ❌: some 3–4k line components
- Don’t do ❌: Tons of logic inline code in the templates
- Don’t do ❌: Use promises instead of observable
- Don’t do ❌: Mapping or transforming data in the subscribe method
- Don’t do ❌: Put everything in SharedModule
- Nice to do ✔️: Add $ suffix for variables type observable
- Nice to do ✔️: defining constants in a separate file

## Reference

- [Error Handling with Angular 8 – Tips and Best Practices](https://rollbar.com/blog/error-handling-with-angular-8-tips-and-best-practices/)
  - [Global Error Handling in Angular](https://pkief.medium.com/global-error-handling-in-angular-ea395ce174b1)
  - https://stackblitz.com/edit/angular-global-error-handling?file=README.md
- [Overview of Progressive Web Apps (PWAs)](https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/)
- [Angular on Desktop](https://www.telerik.com/blogs/angular-on-desktop)