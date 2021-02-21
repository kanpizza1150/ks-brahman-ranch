import React, { useState, useEffect } from 'react'
import Helmet from "../../component/Helmet"
import faker from 'faker'
import { CardWrapper, Card } from './styled'
import { PageWrapper } from '../../globalStyle'
const CattlePage = ({ match, history }) => {
    const activePage = match.params?.cattleType.charAt(0).toUpperCase() + match.params?.cattleType.slice(1)
    const _generateFakeData = () => {
        const data = []
        for (let i = 0; i < 20; i++) {
            data.push({ imgSrc: faker.image.image(), name: faker.name.firstName(), id: faker.random.uuid() })
        }
        return data
    }
    const [cattle, setCattle] = useState(_generateFakeData())
    useEffect(() => {
        setCattle(_generateFakeData())
    }, [match])

    const _handleCardClick = (to) => {
        console.log('to', to)
        history.push(`${match.params?.cattleType}/${to}`)
    }

    const _getCard = () => {
        return cattle.map((item) => (
            <Card onClick={() => _handleCardClick(item.id)} key={item.id}>
                <img src={item.imgSrc} alt={item.name} />
                <p className='name'>{item.name}</p>
            </Card >)
        )
    }
    return (
        <PageWrapper>
            <Helmet title={activePage} />
            <h1>Our {activePage} Herd</h1>
            <CardWrapper>
                {_getCard()}
            </CardWrapper>
        </PageWrapper>
    )
}

export default CattlePage
