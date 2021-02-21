import * as React from "react"

function PhoneIcon (props) {
    return (
        <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" { ...props }>
            <path
                stroke="currentColor"
                d="M4.72.5H2.5a2 2 0 00-2 2v2c0 5.523 4.477 10 10 10h2a2 2 0 002-2v-1.382a1 1 0 00-.553-.894l-2.416-1.208a1 1 0 00-1.396.578l-.297.893a1.21 1.21 0 01-1.385.804A6.047 6.047 0 013.71 6.547a1.21 1.21 0 01.804-1.385l1.108-.37a1 1 0 00.654-1.19L5.69 1.257A1 1 0 004.72.5z"
            />
        </svg>
    )
}

export default PhoneIcon
