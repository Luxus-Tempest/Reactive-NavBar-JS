import React from "react";

const Quote = (props) => {
  const { quote, author, image } = props;

  return (
    <div className="quote" style={{ backgroundImage: `url(/${image})` }}>
      <div>
        <p>{quote}</p>
        <strong>{author}</strong>
      </div>
    </div>
  );
};

export default Quote;
