import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import normalize from 'normalize.css/normalize.css';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...(initialProps.styles), ...sheet.getStyleElement()],
    };
  }

  render() {
    return (
      <html lang="ja">
        <Head>
          {this.props.styleTags}
          <style global>{normalize}</style>
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </html>
    );
  }
}
