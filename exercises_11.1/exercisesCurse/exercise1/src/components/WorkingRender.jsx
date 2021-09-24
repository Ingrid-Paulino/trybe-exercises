import React from 'react';

class WorkingRender extends React.Component {
  render() {
    const name = "Ingrid";
    return (
      <main>
        <h2>{name}</h2>
        <p>Tenho 18 anos, e vivo em MG - Belo Horizonte! </p>
      </main>
      
    );
  }
}

// forma 2 de exportar
export default WorkingRender;