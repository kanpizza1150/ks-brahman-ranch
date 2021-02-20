import { GlobalStyle } from "./globalStyle"
import Footer from "./component/Footer"
import Helmet from "./component/Helmet"
import NavigatorBar from "./component/NavigatorBar"
import { BodyWrapper, MainWrapper } from "./globalStyle"
import LandingPage from "./container/LandingPage"
import CattlePage from "./container/CattlePage"
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch
} from "react-router-dom"
const App = () => {
    const _getRoutes = () => {
        return (
            <Switch>
                <Route exact path='/home' component={LandingPage} />
                <Route path='/cattle/:cattleType' component={CattlePage} />
                <Route path='*'>
                    <Redirect to='/home' />
                </Route>
            </Switch>)
    }
    return (
        <>
            <Helmet />
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
