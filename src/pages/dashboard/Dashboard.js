import "./Dashboard.css";
import {
  MdDashboardCustomize,
  MdOutlinePersonOutline,
  MdFormatAlignCenter,
} from "react-icons/md";
import { IoMailOutline, IoSettingsOutline } from "react-icons/io5";
import { HiOutlineRefresh } from "react-icons/hi";
import { SiPlatformdotsh } from "react-icons/si";
import { IoIosLink } from "react-icons/io";
import { GoFileMedia, GoArrowRight } from "react-icons/go";
import { GrTemplate } from "react-icons/gr";
import Subsribe from "./dashboardPages/Subscribe";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("localStorage.getItem", localStorage.getItem("token"));
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  // const params = useParams()
  // console.log("dashboard=========>",params)
  let location = useLocation();
  console.log("location state=========>", location);
  return (
    <div className="dashboard-container">
      <div className="dashboard-container-left">
        <div className="dashboard-container-left-logo">
          <p>MailerLite Logo</p>
        </div>
        <div className="dashboard-container-left-item">
          <MdDashboardCustomize />
          <p> Dashboard</p>
        </div>
        <div className="dashboard-container-left-item">
          <IoMailOutline />
          <p>Campagins</p>
        </div>
        <div
          className="dashboard-container-left-item"
          style={{ borderRight: "2px solid #4DC36B" }}
        >
          <MdOutlinePersonOutline />
          <p>Subscriber</p>
        </div>
        <div className="dashboard-container-left-item">
          <MdFormatAlignCenter />
          <p>Forms</p>
        </div>
        <div className="dashboard-container-left-item">
          <SiPlatformdotsh />
          <p>Site</p>
        </div>
        <div className="dashboard-container-left-item">
          <HiOutlineRefresh />
          <p>Automation</p>
        </div>
        <div className="dashboard-left-spacer"></div>
        <div className="dashboard-container-left-item">
          <IoSettingsOutline />
          <p>Account Settings</p>
        </div>
        <div className="dashboard-container-left-item">
          <IoIosLink />
          <p>Integrations</p>
        </div>
        <div className="dashboard-container-left-item">
          <GoFileMedia />
          <p>File Manager</p>
        </div>
        <div className="dashboard-container-left-item">
          <GrTemplate />
          <p>My templates</p>
        </div>
        <div className="dashboard-left-spacer"></div>
        <div style={{ margin: "0px 0px", padding: "15px 40px" }}>
          <div style={{ border: "1px solid #ECEDF0", padding: "10px" }}>
            <div style={{ margin: "2px 0px" }}>
              <p style={{ fontSize: "12px", color: "#404146" }}>Free trial</p>
            </div>
            <div style={{ margin: "2px 0px" }}>
              <p style={{ fontSize: "12px", color: "#404146" }}>Progress Bar</p>
            </div>
            <div
              style={{
                margin: "2px 0px",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: "12px", color: "#404146" }}>30 days left</p>
              <div
                style={{
                  marginLeft: "2px",
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GoArrowRight />
              </div>
            </div>
          </div>
        </div>

        <div className="dashboard-container-left-bottom">
          <p style={{ fontSize: "12px", color: "#404146" }}>Need help?</p>
          <p style={{ fontSize: "12px", color: "#404146" }}>Refer a friend</p>
        </div>
      </div>
      <div className="dashboard-container-right">
        <Subsribe />
      </div>
    </div>
  );
};

export default Dashboard;
