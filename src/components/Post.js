import React from "react";
import "./styles/Post.css";

import useWindowSize from "../hooks/useWindowSize";

function Post(props) {
  const size = useWindowSize();

  return (
    <article className="post">
      <div>
        <h3 className="post--title">{props.title}</h3>
        <p className="post--content">{props.content}</p>
      </div>
      <img
        className="post--img"
        src={
          size.width >= 480
            ? "https://picsum.photos/500/300"
            : "https://picsum.photos/300/200"
        }
        alt="post img"
      />
    </article>
  );
}

export default Post;
