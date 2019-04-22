import React from "react";
import styled from "styled-components";

import { Title } from "./0_Footer";

export default () => (
  <Form>
    <Title>Get in Touch</Title>
    <NameLbl>Name</NameLbl>
    <Name type="text" placeholder="Name" />
    <EmailLbl>Email</EmailLbl>
    <Email type="text" placeholder="Email" />
    <MessageLbl>Message</MessageLbl>
    <Message rows="6" placeholder="Message" />
    <Button>Send Message</Button>
  </Form>
);

const Form = styled.form`
  background-color: #e5e5e5;
  padding: 3em;
  display: grid;
  grid-column-gap: 3em;
  grid-template-rows: 3.5em 2.5em 3em 4.5em 3em 4.5em 12em 6em;
  grid-template-areas:
    "title     title     title     title"
    "name-lbl  name-lbl  name-lbl  name-lbl"
    "name      name      name      name"
    "email-lbl email-lbl email-lbl email-lbl"
    "email     email     email     email"
    "msg-lbl   msg-lbl   msg-lbl   msg-lbl"
    "msg       msg       msg       msg"
    "button    button    button    button";

  @media (min-width: 768px) {
    padding: 3em 5em;
  }
  @media (min-width: 1280px) {
    padding: 3em 0;
  }
  @media (min-width: 1680px) {
    width: 100%;
    padding: 5em 0;
    margin-right: 5em;
    grid-template-rows: 3.5em 2.5em 3em 4.5em 12em 6em;
    grid-template-areas:
      "title    title    title     title"
      "name-lbl name-lbl email-lbl email-lbl"
      "name     name     email     email"
      "msg-lbl  msg-lbl  msg-lbl   msg-lbl"
      "msg      msg      msg       msg"
      "button   button   button    button";
  }
`;

const InputTextArea = `
  font-size: 1rem;
  width: 100%;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  text-indent: 10px;
`;

const NameLbl = styled.label`
  grid-area: name-lbl;
`;

const Name = styled.input`
  grid-area: name;
  ${InputTextArea}
`;

const Email = styled.input`
  grid-area: email;
  ${InputTextArea}
`;

const EmailLbl = styled.label`
  grid-area: email-lbl;
  @media (max-width: 1680px) {
    padding-top: 2em;
  }
`;

const MessageLbl = styled.label`
  grid-area: msg-lbl;
  padding-top: 2em;
`;

const Message = styled.textarea`
  grid-area: msg;
  ${InputTextArea}
`;

const Button = styled.button`
  grid-area: button;
  margin-top: 2em;
  justify-self: left;
  padding: 0.5em 1em;
  background-color: #3f9dff;
  color: white;
  font-weight: 900;
  font-size: 1.1rem;
  transition: 0.3s ease-in;
  &:hover {
    background-color: #19b5fe;
  }
`;
