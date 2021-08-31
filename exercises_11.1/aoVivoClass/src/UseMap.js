import React from "react";

// primeira letra tem que ser maiuscula
class UseMap extends React.Component {
  render() {
    const arr = [0, 1, 2, 3, 4]
    return (
      arr.map((element) => <p>{element}</p>)
  );
}
};

export default UseMap;