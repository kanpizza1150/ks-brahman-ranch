import React from 'react'
// import Helmet from "../../component/Helmet"
// import faker from 'faker'
import { CattleDetailPageWrapper } from './styled'
import { PageWrapper } from '../../globalStyle'
const CattleDetailPage = ({ match, history }) => {
    console.log('match', match)
    return (<CattleDetailPageWrapper>
        <button onClick={() => history.push(`/cattle/${match.cattleType}`)}>Back</button>
        <PageWrapper>Detail</PageWrapper>
    </CattleDetailPageWrapper>)
}

export default CattleDetailPage
