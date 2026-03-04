import "./Transportation.css";

const BusInformation = () => {
  return (
    <div className="bus-information" style={{
      display: "flex",
      marginTop: "5vw", // NOT FINAL
      marginLeft: "7vw",
      width: "83vw",
      height: "44vw",
      border: "0.26vw solid #000",
      background: "#FFF"
    }}>
      <div className="notice-block" style={{ display: "flex", width: "17vw", height: "44vw", background: "#000", alignItems: "center" }}>
        <span className="notice-text">Notice</span>
      </div>
      <div className="bus-info-body" style={{ display: "flex", width: "66vw", height: "44vw", background: "#FFF" }}>
        <div className="bus-info-header" style={{ marginTop: "3vw", marginLeft: "3vw" }}>
          <span className="profile-title">Bus Information</span>
          <div className="title-underline" />
          <span className="profile-text">
              <br/>Buses ARE FREE! You do not have to buy a ticket or pay for them.<br/><br/>
              There are buses to take you to the Siebel Center for CS and back. Please arrive 15 minutes before the bus is set to depart.
          </span>
          <span className="profile-text"><br/><br/><br/>Morning Bus</span>
          <span className="profile-text" style={{ marginLeft: "3vw", display: "block", width: "58vw" }}>
            <br/>Union Station, Chicago (225 S Canal St, Chicago, IL 60606)<br/>
            Depart Union Station @ 5:55 AM<br/>
            Arrive at Siebel Center for CS @ 8:00 AM<br/>
          </span>
          <span className="profile-text">Evening Bus</span>
          <span className="profile-text" style={{ marginLeft: "3vw", display: "block", width: "58vw" }}>
            <br/>Union Station, Chicago (225 S Canal St, Chicago, IL 60606)<br/>
            Depart Siebel Center for CS @ 6:15 PM<br/>
            Arrive at Union Station @ 8:30 PM
          </span>
        </div>
      </div>
    </div>
  );
}

function Transportation() {
  return (
    <div>
      <BusInformation/>
    </div>
  );
}

export default Transportation;
