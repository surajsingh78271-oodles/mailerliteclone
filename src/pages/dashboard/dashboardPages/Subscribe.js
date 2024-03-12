import "./Subscribe.css";
import { MdChatBubble, MdDashboard } from "react-icons/md";
import { GoChevronDown } from "react-icons/go";
import { FaRegBell } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import AllSubscriber from "./pages/AllSubscriber";
import Segment from "./pages/segment/Segment";
import Group from "./pages/group/Group";
import Fields from "./pages/fields/Fields";
import Stats from "./pages/stats/Stats";
import CleanUpInactive from "./pages/cleanUpInactive/CleanUpInactive";
import History from "./pages/history/History";
import {  useState } from "react";
import { MdOutlinePersonOutline,MdLogout} from "react-icons/md";
import { useDispatch } from "react-redux";
import { logoutHandle } from "../../../redux/features/AuthSlice";
import { useNavigate } from "react-router-dom";

const Subsribe = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const ALL_SUBSCRIBER = "ALL_SUBSCRIBER";
  const SEGMENT = "SEGMENT";
  const GROUP = "GROUP";
  const FIELDS = "FIELDS";
  const STATS = "STATS";
  const CLEAN_UP_INACTIVE = "CLEAN_UP_INACTIVE";
  const HISTORY = "HISTORY";
  const [subscribeNavTabItemFlag, setSubscribeNavTabItemFlag] = useState({
    key: "ALL_SUBSCRIBER",
    value: true,
  });

  const [showLogoutModalFlag,setShowLogoutModalFlag] = useState(false)

  const handleChangeNavigation = (value) => {
    // console.log("Click Nav value=========>",value)
    let obj1 = { key: value, value: true };
    setSubscribeNavTabItemFlag(obj1);
  };
  const handleLogout = ()=>{
    setShowLogoutModalFlag(false)
    dispatch(logoutHandle())
    localStorage.removeItem("token")
    navigate("/")
  }
  return (
    <div>
      <div className="dashboard-container-right-header">
        <div className="dashboard-container-right-header-left">
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "5px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MdChatBubble color="#4DC36B" />
          </div>

          <div className="dashboard-container-right-header-left-content">
            <p id="dashboard-container-right-header-left-content-1">
              Suraj Singh
            </p>
            <p id="dashboard-container-right-header-left-content-2">Free Pln</p>
          </div>
          <GoChevronDown />
        </div>
        <div className="dashboard-container-right-header-right">
          <div className="flex-row">
            <MdDashboard />
          </div>
          <div className="flex-row">
            <FaRegBell />
          </div>
          <div className="dashboard-container-right-header-right-content">
            <p id="dashboard-container-right-header-right-content-1">
              Suraj Singh
            </p>
            <p id="dashboard-container-right-header-right-content-2">
              suraj.singh@oodles.io
            </p>
          </div>
          <div className="flex-row-1">
            <p>S</p>
          </div>
          <div style={{position:"relative"}}>
            <GoChevronDown style={{cursor:"pointer"}} onClick={()=>{setShowLogoutModalFlag(!showLogoutModalFlag)}} />
            {
              showLogoutModalFlag && <div className="header-logout">
              <ul style={{padding:"0px",listStyle:"none"}}>
                <li ><MdOutlinePersonOutline style={{marginRight:"5px"}} /> <p>My Profile</p></li>
                <li onClick={()=>{handleLogout()}}><MdLogout style={{marginRight:"5px"}} /> <p>Logout</p></li>
              </ul>
            </div>
            }
            
          </div>
        </div>
      </div>
      <div style={{ height: "45px" }}></div>
      <div className="subscribe-heading">
        <div>
          <h1>Subscriber</h1>
        </div>
        <div className="subscribe-heading-right">
          <div className="subscribe-heading-right-1">
            <IoSearchOutline />
            <p>Search</p>
          </div>
          <div className="subscribe-heading-right-2">
            <p>Add subscribers</p>
          </div>
        </div>
      </div>
      <div style={{ height: "30px" }}></div>
      <div className="subscriber-tab">
        <ul>
          <li
            onClick={() => {
              handleChangeNavigation(ALL_SUBSCRIBER);
            }}
            style={{
              borderBottom: `2px solid ${
                subscribeNavTabItemFlag.key === ALL_SUBSCRIBER
                  ? "#4DC36B"
                  : "#F3F4F6"
              }`,
            }}
          >
            All Subscriber
          </li>
          <li
            onClick={() => {
              handleChangeNavigation(SEGMENT);
            }}
            style={{
              borderBottom: `2px solid ${
                subscribeNavTabItemFlag.key === SEGMENT ? "#4DC36B" : "#F3F4F6"
              }`,
            }}
          >
            Segments
          </li>
          <li
            onClick={() => {
              handleChangeNavigation(GROUP);
            }}
            style={{
              borderBottom: `2px solid ${
                subscribeNavTabItemFlag.key === GROUP ? "#4DC36B" : "#F3F4F6"
              }`,
            }}
          >
            Group
          </li>
          <li
            onClick={() => {
              handleChangeNavigation(FIELDS);
            }}
            style={{
              borderBottom: `2px solid ${
                subscribeNavTabItemFlag.key === FIELDS ? "#4DC36B" : "#F3F4F6"
              }`,
            }}
          >
            Fields
          </li>
          <li
            onClick={() => {
              handleChangeNavigation(STATS);
            }}
            style={{
              borderBottom: `2px solid ${
                subscribeNavTabItemFlag.key === STATS ? "#4DC36B" : "#F3F4F6"
              }`,
            }}
          >
            Stats
          </li>
          <li
            onClick={() => {
              handleChangeNavigation(CLEAN_UP_INACTIVE);
            }}
            style={{
              borderBottom: `2px solid ${
                subscribeNavTabItemFlag.key === CLEAN_UP_INACTIVE
                  ? "#4DC36B"
                  : "#F3F4F6"
              }`,
            }}
          >
            Clean up inactive
          </li>
          <li
            onClick={() => {
              handleChangeNavigation(HISTORY);
            }}
            style={{
              borderBottom: `2px solid ${
                subscribeNavTabItemFlag.key === HISTORY ? "#4DC36B" : "#F3F4F6"
              }`,
            }}
          >
            History
          </li>
        </ul>
      </div>
      <div style={{ padding: "40px 0px" }}>
        {(() => {
          if (subscribeNavTabItemFlag.key === ALL_SUBSCRIBER) {
            return <AllSubscriber />;
          } else if (subscribeNavTabItemFlag.key === SEGMENT) {
            return <Segment />;
          } else if (subscribeNavTabItemFlag.key === GROUP) {
            return <Group />;
          } else if (subscribeNavTabItemFlag.key === FIELDS) {
            return <Fields />;
          } else if (subscribeNavTabItemFlag.key === STATS) {
            return <Stats />;
          } else if (subscribeNavTabItemFlag.key === CLEAN_UP_INACTIVE) {
            return <CleanUpInactive />;
          } else if (subscribeNavTabItemFlag.key === HISTORY) {
            return <History />;
          }
        })()}
      </div>
    </div>
  );
};

export default Subsribe;
