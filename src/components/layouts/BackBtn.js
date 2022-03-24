import React, { useContext } from "react";
import { languageContext } from "../../context/languageContext";

const langs = {
  English: "Go home",
  Persian: "بازگشت",
};

function BackBtn() {
  const language = useContext(languageContext);

  return (
    <div className="go-back">
      <a href="/" className="go-back-btn">
        {langs[language.current]}
      </a>
      <h1>Helloo from Developer</h1>
    </div>
  );
}

export default React.memo(BackBtn);
