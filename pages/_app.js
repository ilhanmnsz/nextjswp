import '../styles/index.css';
import {apolloProvider} from "@apollo/client/react";
import { client } from '../lib/apollo';

function MyApp({ Component, pageProps }) {
  return (
    <apolloProvider client={client}>
        <Component {...pageProps} />
    </apolloProvider>
    )
}

export default MyApp