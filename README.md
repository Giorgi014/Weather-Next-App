# Weather-Next-App

This repository contains a small weather forecast web application built with Next.js and TypeScript. The app shows the current weather and a 5-day forecast for a searched city, supports theme toggling (light/dark), and temperature unit switching (Celsius/Fahrenheit).

**Live Demo:** Not provided in the repo. To run locally, follow the Installation section.

**Stack summary**
- **Framework:** `Next.js` (App Router)
- **Language:** `TypeScript`
- **UI / styling:** `Tailwind CSS` + `PostCSS`
- **Icons:** `react-icons`

**Primary features**
- **Search:** Search for a city to view current weather and forecast.
- **5-day forecast:** Uses OpenWeatherMap 5-day forecast API.
- **Theme toggle:** Light and dark themes via `ThemeProvider`.
- **Temperature toggle:** Celsius / Fahrenheit persisted in `localStorage`.
- **Loader UI:** Global loader via a `LoaderProvider`.

**Design**
- **Designer:** The UI and visual design were created by `lovable`.

**Note about API key:** The project currently contains an API key hard-coded in `src/app/hooks/weatherProvider.tsx`. For security best practices you should store any API keys in environment variables (see Environment Variables below).

**Compatibility:** Node.js 18+ is recommended.

**Scripts (package.json)**
- **`npm run dev`**: Runs Next.js in development mode.
- **`npm run build`**: Builds the app for production.
- **`npm run start`**: Starts the production server after build.
- **`npm run lint`**: Runs `eslint`.

----

**Project structure** (top-level important files)

- `app/` : Next.js App Router directory containing pages, layout and components.
	- `globals.css` : Global styles (Tailwind + custom styles).
	- `layout.tsx` : Root layout wrapper.
	- `page.tsx` : Root page for the app (home).
	- `header/` : Header UI and controls (theme + temperature toggles).
	- `hooks/` : React context providers used across the app:
		- `weatherProvider.tsx` : Fetches weather & forecast data (OpenWeatherMap).
		- `themeProvider.tsx` : Theme (dark / light) state persisted to `localStorage`.
		- `temperatureProvider.tsx` : Temperature unit state persisted to `localStorage`.
		- `loaderProvider.tsx` : Global loading UI controls.
	- `main/` : Main app UI and feature pages (forecast, searched city views).
		- `forcast/forecastCont/forecast.ts` : Forecast rendering logic.
		- `searchedCity/infoContainer/tempDetails.ts` : Temperature and details components.
	- `search/` : City search UI.

- `public/` : Static assets (icons, fonts, images).
- `.next/` : Next.js build output (ignored in source control normally).
- `package.json` : Scripts and dependencies.
- `postcss.config.mjs`, `tailwind.config` (if present): Tailwind/PostCSS configuration.

----

**Dependencies (from `package.json`)**
- `next` — App framework (App Router based project).
- `react`, `react-dom` — UI library.
- `react-icons` — Icon library.

Dev dependencies include:
- `tailwindcss`, `@tailwindcss/postcss` — utility CSS framework and PostCSS plugin.
- `typescript`, `@types/*` — TypeScript and types for Node/React.
- `eslint`, `eslint-config-next` — linting.

----

**Local installation & development**

1. Install dependencies

```powershell
cd path\to\weather-app
npm install
```

2. Add environment variables (recommended)

Create `.env.local` and add your OpenWeatherMap API key:

```text
NEXT_PUBLIC_OPENWEATHER_API_KEY=your_openweather_api_key_here
```

3. Run the dev server

```powershell
npm run dev
```

Open `http://localhost:3000` in your browser.

4. Build for production

```powershell
npm run build
npm run start
```

----

**How the app fetches weather**

- The app uses the OpenWeatherMap 5-day forecast API (`/data/2.5/forecast`) inside `WeatherProvider` to fetch a city's forecast. The `WeatherProvider` exposes `city`, `setCity`, `data` (current/aggregated weather), and `error` states via React Context.

**Notes & suggestions**
- Move the hard-coded API key out of source control and into a `.env.local` file.
- Consider fetching via a Next.js API route (server-side) to keep keys private and avoid exposing them to the client.
- Add a `.gitignore` entry for `.env.local` if missing.
- Add a short `CONTRIBUTING.md` and `CODE_OF_CONDUCT.md` if you plan to accept contributions.

----

**Troubleshooting**
- If the app fails to fetch data, check that your API key is valid and not rate-limited.
- If you get CORS or network errors, verify your network and that the API endpoint (`https://api.openweathermap.org`) is reachable.

----

**Contributing**
- Fork the repo, make changes on a branch, and open a Pull Request. Describe the change and include steps to reproduce.

----

**License**
- This project does not include a license file. Add a `LICENSE` if you want to make the terms explicit.

----

If you'd like, I can:
- Replace the hard-coded API key in `src/app/hooks/weatherProvider.tsx` with an environment variable reference.
- Add an `.env.example` and update code to read `process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY`.
- Create a `CONTRIBUTING.md` with basic contribution instructions.

If you want any of those, tell me which and I'll implement them.
