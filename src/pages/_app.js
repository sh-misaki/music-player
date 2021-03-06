import App, { Container } from "next/app";
import React from "react";
import Router from 'next/router'
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";

import createStore from "~/stores";

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPlay,
  faStepForward,
  faStepBackward,
} from '@fortawesome/free-solid-svg-icons';
library.add(faPlay, faStepForward,faStepBackward,);

class MyApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;

    return (
      <Container>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withRedux(createStore)(MyApp);
