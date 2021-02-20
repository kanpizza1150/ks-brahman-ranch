import { GlobalStyle } from './globalStyle'
import Footer from './component/Footer'
import Helmet from "./component/Helmet";
import NavigatorBar from './component/NavigatorBar'
const App = () => {
  return (
    <>
      <Helmet title='Home' />
      <GlobalStyle />
      <NavigatorBar/>
      App
      <Footer />
    </>
  );
}

export default App;
