import React from "react";
import "./EmailRow.css";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import LabelOutlinedIcon from "@material-ui/icons/LabelOutlined";
import { IconButton } from "@material-ui/core";
import { Checkbox } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import {useDispatch} from "react-redux"
import { selectMail } from "../features/mailSlice";
const EmailRow = ({ title,subject, description, time, id }) => {
  const history = useHistory();
const dispatch = useDispatch()

const openMail=()=>{

  dispatch(selectMail({
    title, subject, description, time, id,
   
  }))

  history.push("/mail")
}

  return (
    <div onClick={openMail} className="emailRow">
      <div className="emailRow__options">
        <Checkbox />
        <IconButton>
          <StarBorderOutlinedIcon />
        </IconButton>
        <IconButton>
          <LabelOutlinedIcon />
        </IconButton>
      </div>
      <h3 className="emailRow__title">{title}</h3>
      <div className="emailRow__message">
        <h4>
          {subject} {" - "}
          <span className="emailRow__description">{description}</span>
        </h4>
      </div>
      <div className="emailRow__time">{time}</div>
    </div>
  );
};

export default EmailRow;
