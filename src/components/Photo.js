import React from "react";

const Photo = ({ data, matchProps, fetchByTag }) => {
  let gifsDisplay = data.map((gif, i) => {
    return (
      <Photo key={i} id={gif.id} server={gif.server} secret={gif.secret} />
    );
  });
  fetchByTag(matchProps.match.params.id);
  console.log(gifsDisplay);
  return (
    <div className="photo-container">
      <h2>{matchProps.match.params.id}</h2>
      <ul>
        {data.map((gif, i) => {
          return (
            <li>
              <img
                src={`https://live.staticflickr.com/${gif.server}/${gif.id}_${gif.secret}.jpg`}
              ></img>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Photo;
/*   */
