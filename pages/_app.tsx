import { Provider } from "react-redux";
import store from "./../store/index";
import App from "next/app";
import { GlobalStyle } from "../components/layout/layoutStyle";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <Provider store={store}>
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    );
  }
}
