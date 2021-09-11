import Head from "next/head";
import Icon from "../static/icon.png";
import { add } from '../src/util';
import styled from 'styled-components';

const MyP = styled.div`
  color: blue;
  font-size: 18pt;
`;

function Page1() {
  return (
    <div>
      <Head>
        <title>page1</title>
        <meta name="description" content="hello world" />
      </Head>
      <MyP>{`10 + 20 = ${add(10, 20)}`}</MyP>
      <MyP>this is home page</MyP>
      <img src={Icon} />
    </div>
  );
}

export default Page1;
