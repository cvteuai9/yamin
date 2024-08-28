import React from 'react'
import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from '@vis.gl/react-google-maps'

export default function TeaMapComponent() {
  const apiKey = 'AIzaSyBAzhEGkDmxTNyMAN3hFt_rOPVLliaNulc'
  return (
    <APIProvider apiKey={''} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        defaultZoom={13}
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
        mapId="aef5b35a6884a3be"
        onCameraChanged={(ev) =>
          console.log(
            'camera changed:',
            ev.detail.center,
            'zoom:',
            ev.detail.zoom
          )
        }
      ></Map>
    </APIProvider>
  )
}
