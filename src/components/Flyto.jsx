import { useEffect } from 'react'
import { useMap } from 'react-leaflet'

const Flyto = ({coordenadas}) => {
    const map = useMap();

    useEffect(() => {
      coordenadas && map.flyTo(coordenadas,map.getZoom())
    }, [coordenadas])
    
  return null
}

export default Flyto