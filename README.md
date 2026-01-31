# Portfolio

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.4.

# Portfolio

Angular portfolio website built with **Vite** for blazingly fast builds and easy deployment.

## Features

- ⚡️ **Vite** - Lightning-fast dev server and builds
- 🅰️ **Angular 19** - Modern Angular with standalone components
- 🎨 **SCSS** - Styled with custom SCSS
- 🌍 **i18n** - Multi-language support
- 🤖 **AI Chat** - OpenAI-powered chat assistant

## Environment Configuration

### Local Development

1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your API key:
   ```bash
   VITE_OPENAI_API_KEY=your_api_key_here
   ```

3. Start dev server:
   ```bash
   npm run dev
   # or
   npm start
   ```

   Server will run at `http://localhost:4200`

### Production Build

```bash
VITE_OPENAI_API_KEY=your_key npm run build
```

### Deployment

Set `VITE_OPENAI_API_KEY` environment variable on your platform:

#### GitHub Pages
- Add `OPENAI_API_KEY` to repository secrets
- Push to `main` branch - auto-deployed via GitHub Actions

#### Railway
- Add `VITE_OPENAI_API_KEY` to environment variables  
- Connect repo and deploy

#### Vercel/Netlify
- Add `VITE_OPENAI_API_KEY` to environment variables
- Build command: `npm run build`
- Output directory: `dist/visions.shkrsltn/browser`

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm test` - Run tests

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
