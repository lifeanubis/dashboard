import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import createTheme from "@mui/material/styles/createTheme";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const theme = createTheme({
  // typography: {
  //   body2: {
  //     fontSize: "0.9rem",
  //     fontWeight: 500,
  //     color: "#364152",
  //   },
  //   button: {
  //     fontWeight: 600,
  //   },
  // },

  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: "#FCFCFD",
        },
      },
    },
  },
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>
);
