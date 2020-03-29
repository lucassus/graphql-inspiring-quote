import React from "react";

type Props = {
  text: string;
  author: string;
};

export const Quote: React.FunctionComponent<Props> = ({ text, author }) => (
  <blockquote>
    {text}
    <footer>{author}</footer>
  </blockquote>
);
