import React from 'react'
import "./HeaderOption.css"
import {Avatar} from "@material-ui/core";

function HeaderOption({Icon,title,avatar}) {
    return (
        <div className="headerOption">
            {Icon && <Icon className="headerOption__icon" />}
            {avatar && <Avatar src={avatar} className="headerOption__avatar" />}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
