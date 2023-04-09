# React Dashboard Chakra UI

Developed Dashboard design using React TS & Chakra UI

## Screenshots


| Free Version                                                                                                       | PRO Version                                                                                                               |
| ------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| ![Horizon UI](https://user-images.githubusercontent.com/54368055/230761797-584a0c25-cd9c-4262-8384-7a68c059c4f9.png) | ![Horizon UI PRO](https://user-images.githubusercontent.com/54368055/230761825-cdfcc120-92be-4ede-8d26-c362f5bfae89.png) |
| ![Horizon UI](https://user-images.githubusercontent.com/54368055/230761894-2412d831-8d0a-4ed6-ac8f-eae5b74e77fd.png) | ![Horizon UI PRO](https://user-images.githubusercontent.com/54368055/230761920-ab71ceb8-37f8-4a03-aecd-9adce9693482.png) |


## Quick start

Clone the repository with the following command:

```bash
git clone  https://github.com/devin989/react-dashboard-chakraUI.git
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
- `React Query` used as Data fetching library. All caching and error handling managed by itself
- `Redux Tookit` is used to handle user data
- Code is strcutured by using atomic design pattern
- Jest is used as test framework
- Used security best practices
  - used Env to store API key
  - used Authorization headers to pass API key
  - used JWT
- Maintained proper Git Branching structure
