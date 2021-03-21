// ./pages/_document.js
import Document, { Html, Head, Main, NextScript } from "next/document";

const scriptTxt = `
(function () {
  const { pathname } = window.location
  const ipfsMatch = /.*\\/Qm\\w{44}\\//.exec(pathname)
  const ipnsMatch = /.*\\/k5\\w{60}\\//.exec(pathname)
  const base = document.createElement('base')

  base.href = ipfsMatch ? ipfsMatch[0] : ipnsMatch ? ipnsMatch[0] :  '/'
  document.head.append(base)
})();
`;

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <script dangerouslySetInnerHTML={{ __html: scriptTxt }} />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
