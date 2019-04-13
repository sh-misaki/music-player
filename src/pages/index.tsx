import * as React from "react";

import { loadData, tickClock } from "~/stores/actions";
import Page from "~/components/containers";

export default class BlogsPage extends React.Component {
  protected static async getInitialProps(props: any) {
    const { store, isServer } = props.ctx;
    store.dispatch(tickClock(isServer));

    if (!store.getState().placeholderData) {
      store.dispatch(loadData());
    }

    return {
      isServer,
      dispatch: store.dispatch,
    };
  }

  public render() {
    return (
      <Page
        title="Index Page"
        linkTo="/other"
        NavigateTo="Other Page"
        lastUpdate={0}
      />
    );
  }
}
