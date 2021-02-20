import React from 'react'
import Helmet from "../../component/Helmet"

const CattlePage = ({ match }) => {
    const activePage = match.params?.cattleType.charAt(0).toUpperCase() + match.params?.cattleType.slice(1)
    return (
        <div>
            <Helmet title={activePage} />
            {activePage}
        </div>
    )
}

export default CattlePage
