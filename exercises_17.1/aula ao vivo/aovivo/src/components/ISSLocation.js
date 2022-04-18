//src/components/ISSLocation.js
import React, { Component } from 'react';
import Marker from 'pigeon-marker';
import Map from 'pigeon-maps';
import ISSContext from '../context/ISSContext';
import Coordinates from './Coordinates';

const ONE_SECOND = 1000;
class ISSLocation extends Component {
  componentDidMount() {
    const { getISSLocation } = this.context;

    setInterval(() => {
      getISSLocation();
    }, ONE_SECOND);
  }

  render() {
    const { latitude, longitude } = this.context;

    return (
      //Forma 1 de fazer isso
      // <ISSContext.Consumer>
        // {/* abre chaves pois vou usar js */}
        // {/* dentro posso usar html */}
        // {/* o consumer receber uma função */}
        // {/* detro do parentese que esta (context), pode ser qualquer nome */}

        // {    
            // forma 1
          // (context) => (
          //   // forma 1 de acessar o que tem dentro do context
          //   <h1>{context.latitude}</h1>
          // )

            // forma 2
          // forma 2 de acessar o que tem dentro do context é desistruturando 
          // ({latitude, longitude}) => (
          //   // <h1>{latitude}</h1>
          //   <main>
          //   <div className="map">
          //     <Map
          //       center={ [0, 0] }
          //       defaultWidth={ 450 }
          //       height={ 450 }
          //       minZoom={ 1.5 }
          //       maxZoom={ 8 }
          //       zoom={ 1.5 }
          //     >
          //       <Marker anchor={ [latitude, longitude] } />
          //     </Map>
          //   </div>
          //   <Coordinates latitude={ latitude } longitude={ longitude } />
          // </main>
          // )
      //   }
      // </ISSContext.Consumer>

      //Forma 2 de fazer isso
      // dessa forma nn usamos o <ISSContext.Consumer></ISSContext.Consumer>, e sim o 'ISSLocation.contextType = ISSContext;' e o 'const { latitude, longitude } = this.context;'
      <main>
        <div className="map">
          <Map
            center={ [0, 0] }
            defaultWidth={ 450 }
            height={ 450 }
            minZoom={ 1.5 }
            maxZoom={ 8 }
            zoom={ 1.5 }
          >
            <Marker anchor={ [latitude, longitude] } />
          </Map>
        </div>
        <Coordinates latitude={ latitude } longitude={ longitude } />
      </main>
    );
  }
}

//O contextType é posivel usar somente se tiver um Consumer
ISSLocation.contextType = ISSContext; //usando essa linha, não precisa do <ISSContext.Consumer></ISSContext.Consumer>

export default ISSLocation;