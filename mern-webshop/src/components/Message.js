import React from 'react'
import {Alert} from "react-bootstrap"


const Message = ({varinat,children}) => {
    return (
        <div>
            <Alert varinat={varinat}>
                {children}
            </Alert>
        </div>
    )
Message.defaultProps = {variant:"info"}

}

export default Message
