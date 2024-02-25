import * as React from "react";
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { MapContainer, TileLayer, GeoJSON, LayersControl, LayerGroup, Circle, Marker, Popup, useMap, CircleMarker } from 'react-leaflet'
import "./MapViewScreen.css";
//import kimlien2pointJson from "./kimlien2point.js";
import L from 'leaflet';

var kimlien2pointJson = {
    "type": "FeatureCollection",
    "name": "kimlien2point",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.53162503 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.42605662 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.73568726 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.33084869 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.44602752 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.48358989 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.78456473 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.03967857 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.89518189 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.40537119 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -9.20743752 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.14736748 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -9.89128876 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.39978838 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.06012535 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.4430933 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.77312279 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -12.65447521 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.28995323 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.11156654 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.87454176 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.95872808 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.65658331 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.29490995 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.52340698 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.8083024 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.61652422 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.74520564 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.85812378 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.03693295 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.09551239 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.47316575 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.48881245 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.72324896 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.11362123 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -9.62068558 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.66932106 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.36665869 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.34720802 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.04756808 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.33221912 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.56094599 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.25826788 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.14830828 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.71283865 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.77817035 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.83194208 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.16416645 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.15503764 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.79178619 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -0.24490561 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.6577816 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -0.24626021 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.90436959 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.3371017 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -11.19991589 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.78510189 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -0.2449712 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.95060372 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.94468117 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.9791708 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.73585129 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.70433974 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.12341785 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.45896482 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.19815493 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.86665821 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -10.19507599 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.24486566 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.11658168 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.35425019 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.36803913 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.79397631 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.64594817 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.11621952 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.24406838 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.14517879 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": -10.5466423 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.0063796 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -9.46781063 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.23995399 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.9695816 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.89259124 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -10.33478642 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.53726268 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.94033456 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.63478351 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.82179546 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.74329853 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.11721301 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.98214173 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.07559252 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.67412186 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.07291198 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.95802736 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -10.66262817 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -10.73664379 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.09510803 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.10772705 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.25107265 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -11.11317348 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.75866961 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.04614234 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.80185556 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.89930534 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.0061096889306 ] } }
    ]
};

var kimlien2pointJson2 = {
    "type": "FeatureCollection",
    "name": "kimlien2point",
    "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
    "features": [
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": -13.63162503 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": -13.63162503 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": -13.63162503 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": -5.83162503 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.63162503 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.53162503 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.53162503 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.53162503 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.42605662 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.010272367703958 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": -18.73568726 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": -13.33084869 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.44602752 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.48358989 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.009994855785735 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.78456473 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -14.03967857 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.89518189 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -14.40537119 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -19.20743752 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.14736748 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.009717343867511 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -9.89128876 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.39978838 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.06012535 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -24.4430933 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -24.77312279 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -32.65447521 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -24.28995323 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.11156654 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.009439831949287 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.87454176 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.95872808 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.65658331 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.29490995 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.52340698 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.8083024 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.61652422 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.74520564 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.009162320031063 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.85812378 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.03693295 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.09551239 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.47316575 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.48881245 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.72324896 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.11362123 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -9.62068558 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.66932106 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.008884808112839 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.36665869 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.34720802 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.04756808 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.33221912 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.56094599 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.25826788 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.14830828 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.71283865 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.77817035 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.008607296194615 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.83194208 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.16416645 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.15503764 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.79178619 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -0.24490561 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.6577816 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -0.24626021 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.90436959 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.3371017 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.008329784276391 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -11.19991589 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.78510189 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -0.2449712 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.95060372 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.94468117 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.9791708 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.73585129 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.008052272358167 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.70433974 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.12341785 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.45896482 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -4.19815493 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.86665821 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": -10.19507599 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.007774760439943 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.24486566 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.11658168 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.35425019 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.36803913 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.79397631 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.64594817 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.00749724852172 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.11621952 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.24406838 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.14517879 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": -10.5466423 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.007219736603496 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.0063796 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -9.46781063 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.23995399 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.9695816 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.89259124 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -10.33478642 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.006942224685272 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.53726268 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.94033456 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.63478351 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.82179546 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.74329853 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.11721301 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.98214173 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.07559252 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.67412186 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.006664712767048 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.07291198 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.95802736 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -10.66262817 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -10.73664379 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.09510803 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -8.10772705 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.25107265 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": -11.11317348 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.006387200848824 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833009872618035, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.83328742890204, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.833564985186044, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.75866961 }, "geometry": { "type": "Point", "coordinates": [ 105.833842541470048, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": -3.04614234 }, "geometry": { "type": "Point", "coordinates": [ 105.834120097754052, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.80185556 }, "geometry": { "type": "Point", "coordinates": [ 105.834397654038057, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": -2.89930534 }, "geometry": { "type": "Point", "coordinates": [ 105.834675210322061, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.834952766606065, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835230322890069, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835507879174074, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.835785435458078, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836062991742082, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836340548026087, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836618104310091, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.836895660594095, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837173216878099, 21.0061096889306 ] } },
    { "type": "Feature", "properties": { "VALUE": 0.0 }, "geometry": { "type": "Point", "coordinates": [ 105.837450773162104, 21.0061096889306 ] } }
    ]
};

function GetDataFromUser (user) {
    if (user === "user1") {
        return kimlien2pointJson;
    } else if (user === "user2") {
        return kimlien2pointJson2;
    }
    return kimlien2pointJson;
}

function PointToLayer (feature, latlng) {
    const map = useMap()
    var color;
    var value = feature.properties.VALUE;
    if (value >= -40 && value < -30) {
        color = '#7c0205';
    } else if (value >= -30 && value < -20) {
        color = '#fb7e22';
    } else if (value >= -20 && value < -10) {
        color = '#a7fc3f';
    } else if (value >= -10 && value < 0) {
        color = '#28bcea';
    } else if (value >= 0 && value < 5) {
        color = '#2023c6';
        }
    // Create and return the marker with the determined color
    return L.circleMarker(latlng, {
        radius: 8,
        fillColor: color,
        color: '#000',
        weight: 1,
        opacity: 1,
        fillOpacity: 0.8
    });
    // return (
    //     // <CircleMarker center={latlng} radius={8} pane="my-existing-pane" fillColor={color} color="#000" weight={1} opacity={1} fillOpacity={0.8} />
    //     <CircleMarker center={latlng} radius={8} pane="my-existing-pane" />
    // );
}

function Filter (feature) {
    // Return true to include features with non-zero VALUE
    return feature.properties.VALUE !== 0;
}

function OnEachFeature (feature, layer) {
    // Gắn sự kiện click cho mỗi feature
    layer.on('click', function (e) {
        // Hiển thị cửa sổ pop-up với nội dung thay đổi
        layer.bindPopup('<b>Thông tin:</b><br>' +
            'Giá trị lún: ' + feature.properties.VALUE).openPopup();
    });
}

//const MapViewScreen = () => {
export default function MapViewScreen () {
    const history = useHistory();
    var user = localStorage.getItem("user");
    return (
        <>
        {/* <link rel="stylesheet" href="leaflet.css" /> */}
        {/* <link rel="stylesheet" href="style.css"/> */}
        <link rel="stylesheet" href="menu.css"/>
        <div className="menu">
            <img src="../../assets/logo.png" alt="Logo" className="logo" />
            <span className="logo-text">Space Alpha</span>
            <ul>
                <li><a href="#">Danh sách dự án</a></li>
                <li><a href="#">2D</a></li>
                <li><a href="#">3D</a></li>
                <li><a href="#">Admin</a></li>
            </ul>
            <div class="search-box">
                <input type="text" placeholder="Nhập địa danh..."/>
                <button type="submit">Tìm kiếm</button>
            </div>
        </div>

        <div>
            <span className="mapview-title">
                Chào mừng bạn {user}.
                Đây là trang Map view.
            </span>
        </div>        

        <MapContainer center={[21.00860076055473, 105.83505392074586]} zoom={16} scrollWheelZoom={false} style={{height: '100vh'}}>
            <LayersControl position="topright">
                <LayersControl.BaseLayer  name="Google Satellite">
                    <TileLayer
                        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        //url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'>
                        url='http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}'
                        subdomains={['mt0','mt1','mt2','mt3']}>
                    </TileLayer>
                    {/* <Marker position={center}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                    </Marker> */}
                </LayersControl.BaseLayer>

                <LayersControl.BaseLayer checked name="Street map">
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        >
                    </TileLayer>
                </LayersControl.BaseLayer>

                <LayersControl.Overlay checked name="Kim Liên" >
                    <GeoJSON
                        attribution="&copy; credits due..."
                        data= {GetDataFromUser(user)}
                        pointToLayer={PointToLayer}
                        filter={Filter}
                        onEachFeature={OnEachFeature}>
                        {/* key={Date.now()} */}
                    </GeoJSON>
                </LayersControl.Overlay>
                {/* <Marker position={[15.78580796588987, 111.20485991464999]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker> */}
            </LayersControl>
        </MapContainer>
        </>
    );
}

//export default MapViewScreen;