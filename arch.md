# architecture

nuxt/ vue universal app
- running ant design as well https://www.antdv.com/components/steps/
- this is overkill but whatever
- two views but no redirects
- just a form that rerenders with results
- should not consume env file

servermiddleware
- servermiddleware does not bundle the nuxt config
- requires env file
- api key in env file
- calls the spotify api and does things

create-nuxt-app config
create-nuxt-app v3.7.1
✨  Generating Nuxt.js project in spotify-song-info-app
? Project name: spotify-song-info-app
? Programming language: JavaScript
? Package manager: Npm
? UI framework: Ant Design Vue
? Nuxt.js modules: Axios - Promise based HTTP client, Progressive Web App (PWA)
? Linting tools: ESLint, Prettier
? Testing framework: Jest
? Rendering mode: Universal (SSR / SSG)
? Deployment target: Server (Node.js hosting)
? Development tools: Dependabot (For auto-updating dependencies, GitHub only)
? Continuous integration: GitHub Actions (GitHub only)
? What is your GitHub username? wilson806