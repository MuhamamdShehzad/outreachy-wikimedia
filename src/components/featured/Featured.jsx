import "./featured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Tools With Missing Info</h1>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <div style={{ width: 200, height: 200 }}>
             <CircularProgressbar value={70} text={"76%"} strokeWidth={5}/>
          </div>
         
        </div>
        <p className="title">Missing Information</p>
        <p className="desc">
          Previous tools information. Today's tools may not be included.
        </p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">2.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <KeyboardArrowUpOutlinedIcon fontSize="small"/>
              <div className="resultAmount">1.9k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;