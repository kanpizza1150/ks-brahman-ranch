import React from 'react'
import { Section } from './styled'
import Helmet from "../../component/Helmet"

const LandingPage = () => {
    return (

        <div>
            <Helmet title="Home" />
            <Section>Landing Page section 1</Section>
            <Section>Landing Page section 2</Section>
        </div>
    )
}
export default LandingPage