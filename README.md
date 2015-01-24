### GMPlus.js 0.0.0 [![Build Status](https://travis-ci.org/yagoferrer/gmplus.svg?branch=master)](https://travis-ci.org/yagoferrer/gmplus)

Less Code, More Fun, More Doing! Easy to use, lots of features!

#### How to load a simple Map.
You don't even need to include the Google Maps `<script>` tag. It will load the file for you **asynchronously**.
You can setup a callback to notify you when the Map is fully loaded.
```javascript
var map = new GMP({
    id: 'myMap',
    lat: 41.3833,
    lng: 2.1833
}, function(err, instance) {

  if (!err) {
    console.log('Hey! the Map was fully loaded :)');
  }

});
```
Add a simple HTML tag
```html
<div id="myMap"></div>
```
You can set any other native [map options](https://developers.google.com/maps/documentation/javascript/reference#MapOptions). It just works. For example you can add:
```javascript
{
    zoom: 15,
    streetViewControl: false,
    mapTypeControl: false,
    disableDoubleClickZoom: true
}
```

Once instantiated you can access directly to the Google API like this: `GMP.maps.myMap.instance`

#### How to Add Markers

You can add one or multiple markers to the Map and group them to control visibility, filtering, clustering and other features

```javascript
map.addMarker([
    {lat: 41.3833,
    lng: 2.1833,
    title: 'barcelona'},
    {lat: 41.4489,
    lng: 2.2461,
    title: 'badalona'}
    ],
{group: 'myGroup'});
```

You can set any other native [Marker Options](https://developers.google.com/maps/documentation/javascript/reference#MarkerOptions)

Once the markers are created you can access directly like this: `GMP.maps.myMap.groups.myGroup`

#### Animations
Make your marker bounce `move: map.bounce` or drop `move: map.drop`

```javascript
map.addMarker([{
    lat: 41.3833,
    lng: 2.1833,
    title: 'barcelona',
    move: map.bounce}]);
```
