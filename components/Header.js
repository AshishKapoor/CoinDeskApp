import Head from 'next/head';

const Header = () => {
  return (
    <div>
      <Head>
        <title>CoinDesk</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" type="text/css" href="https://bootswatch.com/4/cerulean/bootstrap.min.css" />
      </Head>
    </div>
  );
}

export default Header;