import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <style>
        {`
          body {
            margin: 0;
            padding: 0;
          }
        `}
      </style>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
