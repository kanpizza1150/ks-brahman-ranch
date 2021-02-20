import { GlobalStyle } from './globalStyle'
import Footer from './component/Footer'
import Helmet from "./component/Helmet";
const App = () => {
  return (
    <>
      <Helmet title='Home' />
      <GlobalStyle />
      App
      <Footer />
    </>
  );
}

export default App;
