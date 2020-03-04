import React from 'react';
import {
  Document,
  Head,
  Main,
} from '@react-ssr/nestjs-express';

export default class extends Document {
  render() {
    return (
      <html lang="cn">
        <Head>
          <title>test</title>
        </Head>
        <body>
          <Main />
        </body>
      </html>
    );
  }
};
