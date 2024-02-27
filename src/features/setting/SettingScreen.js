import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import "./SettingScreen.css";

const userOptions = [
  { key: 'usr1', value: 'usr1', flag: 'usr1', text: 'user1' },
  { key: 'usr2', value: 'usr2', flag: 'usr2', text: 'user2' },
];

const basemapOptions = [
  { key: 'ggStt', value: 'ggStt', flag: 'ggStt', text: 'GoogleSatellite' },
  { key: 'strM', value: 'strM', flag: 'strM', text: 'Streetmap' },
];

const SettingScreen = () => {
    const history = useHistory();
    const Logo = require("../../assets/logo.png").default;

    const [user, setUser] = useState("");
    const [basemap, setBasemap] = useState("");
    const [centerpoint, setCenterpoint] = useState("");

    const onSetting = () => {
      if (user.length == 0) {
        alert("Vui lòng lựa chọn user để xem bản đồ.");
      } else {
        localStorage.setItem("user", user);
        if (basemap.length == 0) {
          alert("Vui lòng lựa chọn bản đồ mặc định.");
        } else {
          localStorage.setItem("basemap", basemap);
          if (centerpoint.length == 0) {
            alert("Vui lòng nhập thông tin tọa độ điểm trung tâm bản đồ.");
          } else {
            localStorage.setItem("centerpoint", centerpoint);
            history.push("/mapview");
          }
        }
      }
    };

    const validateCenter = (center) => {
      var temp = new Array();
      // This will return an array with strings "1", "2", etc.
      temp = center.split(",");
      if (temp.length != 2) {
        alert("Vui lòng nhập đúng định dạng tọa độ điểm trung tâm bản đồ là: A.bbbbbbbbbb, C.dddddddddd");
      } else {
        setCenterpoint(center);
      }
    }

    return (
      <div className="setting_container">
        <img src={Logo} className="setting_logo" />
        <span className="setting_title">Cài đặt tham số</span>

        <div className="text_form">
          <span className="input_field_label">Hãy chọn user: </span>
          <Container>
            <Dropdown
              placeholder='user'
              fluid
              search
              selection
              options={userOptions}
              onChange={
                (event, {value}) => {
                  console.log(value);
                  let user_name = event.target.textContent;
                  setUser(user_name);
                }
              }
            />
          </Container>
        </div>

        <div className="text_form">
          <span className="input_field_label">Hãy chọn base map: </span>
          <Container style={{ margin: 10 }}>
            <Dropdown
              placeholder='base map'
              fluid
              search
              selection
              options={basemapOptions}
              onChange={
                (event, {value}) => {
                  console.log(value);
                  let basemap_value = event.target.textContent;
                  setBasemap(basemap_value);
                }
              }
            />
          </Container>
        </div>

        <div className="text_form">
          <span className="input_field_label">Hãy chọn center point (LatLng): </span>
          <input
            type="text" style={{ width: "100vh", margin: 20 }}
            onChange={(event) => validateCenter(event.target.value)}
            />
        </div>

        <button className="setting_btn" onClick={onSetting}>
          Lưu cài đặt
        </button>
      </div>
    );
  };

export default SettingScreen;