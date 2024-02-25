import * as React from "react";
import { useHistory } from "react-router-dom";
import "./SettingScreen.css";

const SettingScreen = () => {
    const history = useHistory();
    var user = localStorage.getItem("user");
    return (
        <div className="setting-title">
          Chào mừng bạn {user}.
          Đây là trang Cài đặt tham số.
        </div>
    );
}

export default SettingScreen;