import { GlobalStyle } from './globalStyle'
import Footer from './component/Footer'
import Helmet from "./component/Helmet";
import NavigatorBar from './component/NavigatorBar'
import {BodyWrapper,MainWrapper} from './globalStyle'
const App = () => {
  const _getBody=()=>{
    return <BodyWrapper> <h1 style={{textAlign:'center'}}>ควย เพียว!</h1></BodyWrapper>
  }
  return (
    <MainWrapper>
      <Helmet title='Home' />
      <GlobalStyle />
      <NavigatorBar/>
     {_getBody()}
      <Footer />
    </MainWrapper>
  );
}

export default App;
