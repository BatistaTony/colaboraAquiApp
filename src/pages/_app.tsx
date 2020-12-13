import { Provider } from "react-redux";
import { store, persistor } from "../store/index";
import App from "next/app";
import { GlobalStyle } from "../components/layout/layoutStyle";
import { PersistGate } from "redux-persist/integration/react";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <GlobalStyle />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}
