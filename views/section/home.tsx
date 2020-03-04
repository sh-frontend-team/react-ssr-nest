import React from 'react';
import { Head } from '@react-ssr/nestjs-express';

interface IHomeProps {
  message: string;
}

const Home = (props: IHomeProps) => {
  return (
    <React.Fragment>
      <Head>
        <title>首页</title>
      </Head>
      <p>home</p>
    </React.Fragment>
  );
};

export default Home;
