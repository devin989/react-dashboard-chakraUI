# React Dashboard Chakra UI

Developed Dashboard design using React TS & Chakra UI

## Screenshots

|     | Web                             | Mobile                        |
| --- | ------------------------------- | ----------------------------- |
|     | `'Isn't this fun?'`             | 'Isn't this fun?'             |
|     | `"Isn't this fun?"`             | "Isn't this fun?"             |
|     | `-- is en-dash, --- is em-dash` | -- is en-dash, --- is em-dash |

## Quick start

Clone the repository with the following command:

```bash
git clone  https://github.com/horizon-ui/horizon-ui-chakra-ts.git
```

Run in terminal this command:

```bash
npm install
```

Then run this command to start your local server

```bash
npm start
```

### Instructions

- Each left menu item is clickable and lead to blank page except the Dashboard
  menu
- Dashboard menu is selected by default
- Polygon API used to fetch data
  - [Polygon](https://polygon.io/docs/stocks/getting-started)
- React Query used as Data fetching library. All chaching and error handling managed by itself
- Redux Tookit is used to handle user data
- Code is strcutured by using atomic design pattern
- Jest is used as test framework
- Used security best practices
  - used Env to store API key
  - used Authorization headers to pass API key
  - used JWT
- Maintained proper Git Branching structure
