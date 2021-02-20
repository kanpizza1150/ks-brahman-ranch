import { GlobalStyle } from "./globalStyle"
import Footer from "./component/Footer"
import Helmet from "./component/Helmet"
import NavigatorBar from "./component/NavigatorBar"
import { BodyWrapper, MainWrapper } from "./globalStyle"
import LandingPage from "./container/LandingPage"
import CattlePage from "./container/CattlePage"
import {
    BrowserRouter as Router,
    Route
} from "react-router-dom"
const App = () => {
    const _getRoutes = () => {
        return (
            <>
                <Route exact path='/' component={LandingPage} />
                <Route path='/cows' component={CattlePage} />
                <Route path='/sires' component={CattlePage} />
            </>)
    }
    return (
        <>
            <Helmet title="Home" />
            <GlobalStyle />
            <MainWrapper>
                <Router>
                    <NavigatorBar />
                    <BodyWrapper>
                        {_getRoutes()}
                    </BodyWrapper>
                    <Footer />
                </Router>
            </MainWrapper>
        </>
    )
}

export default App
