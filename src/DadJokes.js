import React, { useEffect, useState } from "react";

function DadJokes() {
  const [joke, setJoke] = useState({});

  function getJoke() {
    fetch("https://www.reddit.com/r/dadjokes/top.json?t=day&limit=1")
      .then((response) => response.json())
      .then((json) => setJoke(json.data.children[0].data));
  }

  useEffect(() => {
    getJoke();
  }, []);

  useEffect(() => {
    console.log(joke);
  }, [joke]);

  return <div>DadJokes</div>;
}

export default DadJokes;
