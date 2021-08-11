import GlobalStyle from './styles/global';
import './styles/slick.scss';

import { ContextAPIProvider } from './context/ContextAPI';

import Header from './components/Header';
import Corebiz from './components/Corebiz'
import Footer from './components/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <ContextAPIProvider>
        <Header />
        <Corebiz />
        <Footer />
      </ContextAPIProvider>
    </>
  );
}

export default App;
