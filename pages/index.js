import Fetch from 'isomorphic-unfetch';
import Layout from '../components/Layout';
import Prices from '../components/Prices';

const Index = (props) => {
  return ( 
    <Layout>
      <div>
        <h1>CoinDeskApp</h1>
        <Prices values={props.bpi} />
      </div>
    </Layout>
  );
}

Index.getInitialProps = async function () {
  const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
  const data = await response.json();
  return {
    bpi: data
  };
}

export default Index;