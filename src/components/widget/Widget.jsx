import "./widget.scss";
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import HardwareIcon from '@mui/icons-material/Hardware';
import EditIcon from '@mui/icons-material/Edit';
const Widget = ({ type }) => {
  let data;
  switch (type) {
    case "Total Number of Tools":
      data = {
        title: "Total Number of Tools",
        isMoney: false,
        link: "View all tools",
        icon: (
          <BuildCircleIcon  className="icon"
            style={{
              color: "crimson",
              backgroundColor: "white",}}/>  
        ),
        amount:2706
      };
      break;
    case "Tools With Missing Information":
      data = {
        title: "Tools With Missing Information",
        isMoney: false,
        link: "View all tools",
        icon: (
          <HardwareIcon className="icon"
            style={{
              backgroundColor: "white",
              color: "green",}}/>
         
        ),
        amount:2400
      };
      break;
    case "Tools Edited With Managment System":
      data = {
        title: "Tools Edited With Managment System",
        isMoney: false,
        link: "View all tools",
        icon: (
          <EditIcon  className="icon"
            style={{ backgroundColor: "white", color: "grey"}}/>
          
        ),
        amount:1078
      };
      break;
     
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {data.amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
       <div className="percentage positive">
         
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;