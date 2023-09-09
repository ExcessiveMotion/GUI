# Excessive Motion GUI
This repository contains the default Excessive Motion UI frontend and a minimal CEF app for running the GUI on dedicated controller hardware.

### Project Structure
- TODO: this (Webpack, TypeScript, ...)

The **Frontend** and **CEF App** projects are set up to work from the root reporitory directory, so no directory changes are required to build/run both.

## Frontend [Webpack/TypeScript]
### Build requirements
- Node.js
  - Install `nvm` by following the instructions here: https://github.com/nvm-sh/nvm#installing-and-updating
- pnpm
  - Install using ```corepack```:
```sh
corepack enable
corepack prepare pnpm@latest
```

### Development
When starting and/or after pulling new changes, run ```pnpm install``` to ensure the correct dependencies are installed.

- Run ```pnpm start``` to start a live development server at localhost:8080
- Run ```pnpm build``` to build the UI in development mode
- Run ```pnpm dist``` to build the UI in production mode
> Build files are written to ```./build/frontend/```

Before committing, run ```pnpm format``` to format your code and ```pnpm lint``` to check it with ESLint.

## CEF App [CMake/C++]
- TODO: this (Configuration, building, ...)
