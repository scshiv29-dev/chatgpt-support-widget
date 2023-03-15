import React from "react";

export interface ChatProps {
  apiKey: string;
}

const Chat = (props: ChatProps) => {
  return <button>{props.apiKey}</button>;
};

export default Chat;
