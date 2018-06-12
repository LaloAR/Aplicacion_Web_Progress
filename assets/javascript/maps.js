import styles from './maps/styles';

function initMap(){
  const coords = {
    lat: 19.4266301,
    lng: -99.16154990000001
  };

  let map = new google.maps.Map(document.getElementById('mapa'),{
    center: coords,
    zoom: 16,
    styles: styles
  });

  let marker = new google.maps.Marker({
    position: coords,
    map,
    title: 'Prueba'
  })
}

initMap();
