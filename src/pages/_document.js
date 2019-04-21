import Document, {
  Head,
  Main,
  NextScript,
  NextDocumentContext
} from "next/document";
import { ServerStyleSheet } from "styled-components";
import ress from 'ress/ress.css';
import cookies from "next-cookies";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const { token } = cookies(ctx);

    if (!token && ctx.asPath !== "/login") {
      ctx.res.writeHead(302, { Location: '/login' })
      ctx.res.end();
      return
    }

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
          <style global>{ress}</style>
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </html>
    );
  }
}
