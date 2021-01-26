import React from "react";
import "./SendMail.css";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import { useForm } from "react-hook-form";
const SendMail = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Message</h3>
        <CloseIcon className="sendMail__close" />
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="to"
          type="text"
          placeholder="To"
          ref={register({ required: true })}
        />
        {
          <p className="sendMail__error">
            {errors.to && <p>To is required</p>}
          </p>
        }
        <input
          name="subject"
          type="text"
          placeholder="Subject"
          ref={register({ required: true })}
        />
        {
          <p className="sendMail__error">
            {errors.subject && <p>Subject is required</p>}
          </p>
        }
        <input
          type="text"
          name="message"
          className="sendMail__message"
          ref={register({ required: true })}
        />{" "}
        {
          <p className="sendMail__error">
            {errors.message && <p>Message is required</p>}
          </p>
        }
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SendMail;
