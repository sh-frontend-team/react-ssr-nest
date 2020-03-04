import React from 'react';
import { Head } from '@react-ssr/nestjs-express';

interface IHomeProps {
  message: string;
}

const Mine = (props: IHomeProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>我的</title>
      </Head>
      <p>Mine</p>
    </React.Fragment>
  );
};

export default Mine;
