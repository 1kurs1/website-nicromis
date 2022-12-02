import Head from 'next/head'
import Header from '../components/header';
import About from '../components/about';

export default function Home({result}){
  return (
    <main>
      <Head>
        <title>Nicromis</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <link rel="icon" href="public/nicromis[light].png" />
      </Head>

      <div>
        <Header></Header>
      </div>
      <div>
        <About></About>
      </div>
    </main>
  );
}