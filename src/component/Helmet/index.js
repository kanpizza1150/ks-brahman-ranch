import React from 'react'
import { Helmet as ReactHelmet } from "react-helmet";
export default function Helmet({ title }) {
    return (
        <ReactHelmet>
            <title>{title} | KS Brahman Ranch</title>
        </ReactHelmet>
    )
}
