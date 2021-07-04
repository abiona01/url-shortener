import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Header from "./Header";
import { FaClipboard } from "react-icons/fa";

function Shrink() {
  const [loading, setLoading] = useState(false);
  const [shortLink, setShortLink] = useState([]);
  useEffect((state) => {
    shrinkUrl([state]);
  });
  const onLoad = () => {
    setLoading(true);
  };

  const shrinkUrl = (state) => {
    axios
      .post(`https://api.shrtco.de/v2/shorten?url=${state}`)
      .then((res) => {
        setLoading(false);
        console.log(res.data);
        setShortLink([...shortLink, res.data.result]);
      })
      .catch((err) => console.log(err));
  };
  const Color = ({ color, style }) => {
    const [copied, setCopied] = useState(false);
    const ref = useRef(null);
    const copyResult = () => {
      const content = ref.current.textContent;
      navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 1500);
    };
    const status = copied ? "copied" : "copy";
    return (
      <div style={style} className='color'>
        <small
          ref={ref}
          style={{ fontWeight: "500", fontSize: "32px !important" }}
        >
          {" "}
          {color}
        </small>
        <div className={`clip-div ${status}`}>
          <FaClipboard className='clip ' onClick={copyResult} />
        </div>
      </div>
    );
  };
  return (
    <div>
      <Header shrinkUrl={shrinkUrl} onLoad={onLoad} loading={loading} />
      {shortLink &&
        shortLink.map((item, i) => (
          <div className='link-div' key={i}>
            <div className='links'>
              <div className='original-link-div'>
                <p className='original-link'>{item.original_link}</p>
              </div>
              <div className='short-link'>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <p>{item.short_link}</p>
                  <Color />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Shrink;
