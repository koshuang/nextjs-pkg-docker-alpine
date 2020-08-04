import React from 'react';
import getConfig from 'next/config';

export default () => (
  <div>
    <a href="https://github.com/evenchange4/nextjs-pkg-docker-alpine">
      https://github.com/evenchange4/nextjs-pkg-docker-alpine
    </a>
  </div>
);

export const getStaticProps = async ()=>{return {props:{}}}
