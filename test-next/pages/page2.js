import { callApi } from '../src/api';

Page2.getInitialProps = async ({ query }) => {
  // throw new Error('exception in getInitialProps')
  const text = query.text || 'none';
  const data = await callApi();
  return { text, data };
};

export default function Page2({ text, data }) {
  function onClick() {
    import('../src/sayHello').then(({ sayHello }) => 
      console.log(sayHello())
    );
  }

  return (
    <div>
      <p>this is home page2</p>
      <p>{`text: ${text}`}</p>
      <p>{`data is ${data}`}</p>
      <button onClick={onClick}>sayHello</button>
    </div>
  )
}