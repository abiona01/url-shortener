import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";

function Shrink(state) {
  const [loading, setLoading] = useState(false);
  const [shortLink, setShortLink] = useState("");
  useEffect(() => {
    shrinkUrl();
  }, [state]);
  const shrinkUrl = (state) => {
    axios
      .post(`https://api.shrtco.de/v2/shorten?url=${state}`)
      .then((res) => console.log(res.data.result))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <Header shrinkUrl={shrinkUrl} />
    </div>
  );
}

export default Shrink;
