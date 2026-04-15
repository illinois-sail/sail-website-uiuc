import "./Transportation.css";
import { ReactComponent as TitleCloud } from "../../assets/title_cloud_bus_info.svg";
import { ReactComponent as Star1 } from "../../assets/about/star_1.svg";
import { ReactComponent as Star2 } from "../../assets/about/star_2.svg";

function Transportation() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "100%",
        overflowX: "hidden",
      }}
    >
      {/* Title / intro trapezoid — kept from original */}
      <div style={{ marginTop: "17.9vw" }}>
        <TitleCloud
          className="transportTitleCloud"
          alt="A cloud with the words 'Transportation'"
        />
        <Star1 className="transportStar1" alt="A stylistic star" />
        <Star2 className="transportStar2" alt="A stylistic star" />

        <div
          className="aboutTrap aboutLeftTrap"
          style={{ backgroundColor: "#5FB0B7", marginTop: ".5vw" }}
        >
          <div className="transportIntroBox">
            <span>
              IF YOU NEED A BUS, WE'VE GOT YOU COVERED! ALL BUSES ARE
              COMPLETELY FREE — NO TICKET, NO PAYMENT REQUIRED.
            </span>
          </div>
          <div className="transportIntroBox2">
            <span>
              BUSES WILL TAKE YOU TO AND FROM THE CAMPUS INSTRUCTIONAL FACILITY (CIF).
              PLEASE ARRIVE AT YOUR STOP <strong>15 MINUTES EARLY</strong>{" "}
              BEFORE DEPARTURE!
            </span>
          </div>
        </div>
        <div className="aboutTrap aboutLeftTrapBack" />
      </div>

      <div className="transportDateBanner">
        <span>ALL BUSES RUN APRIL 18, 2026 — DAY OF SAIL IN-PERSON</span>
      </div>

      {/* Morning + Evening as plain card sections */}
      <div className="transportSectionsWrapper">

        {/* Morning Buses */}
        <div className="transportSection">
          <div className="transportSegHeader" style={{ backgroundColor: "#FFDC44" }}>
            <span>MORNING BUSES</span>
          </div>
          <p className="transportDirectionLabel">DEPARTURES → CAMPUS INSTRUCTIONAL FACILITY (CIF)</p>

          <div className="transportCard">
            <div className="transportCardHeader">Naperville Metra Station (Bus A)</div>
            <div className="transportCardAddress">105 E 4th Ave, Naperville, IL 60540</div>
            <div className="transportCardTimes">
              <div className="transportTime depart">
                <span className="transportTimeLabel">PICKUP</span>
                <span className="transportTimeValue">5:30 AM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime depart">
                <span className="transportTimeLabel">DEPART</span>
                <span className="transportTimeValue">5:45 AM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime arrive">
                <span className="transportTimeLabel">ARRIVE CIF</span>
                <span className="transportTimeValue">~8:15 AM</span>
              </div>
            </div>
          </div>

          <div className="transportCard">
            <div className="transportCardHeader">Union Station, Chicago (Bus B)</div>
            <div className="transportCardAddress">225 S Canal St, Chicago, IL 60606</div>
            <div className="transportCardTimes">
              <div className="transportTime depart">
                <span className="transportTimeLabel">PICKUP</span>
                <span className="transportTimeValue">5:40 AM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime depart">
                <span className="transportTimeLabel">DEPART</span>
                <span className="transportTimeValue">5:55 AM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime arrive">
                <span className="transportTimeLabel">ARRIVE CIF</span>
                <span className="transportTimeValue">~8:15 AM</span>
              </div>
            </div>
          </div>

          <div className="transportCard">
            <div className="transportCardHeader">Woodfield Mall, Schaumburg (Bus C)</div>
            <div className="transportCardAddress">
              5 Woodfield Mall, Schaumburg, IL 60173 — Lot E-30 & E-31 (near Ashley HomeStore)
            </div>
            <div className="transportCardTimes">
              <div className="transportTime depart">
                <span className="transportTimeLabel">PICKUP</span>
                <span className="transportTimeValue">5:45 AM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime depart">
                <span className="transportTimeLabel">DEPART</span>
                <span className="transportTimeValue">6:00 AM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime arrive">
                <span className="transportTimeLabel">NEXT STOP</span>
                <span className="transportTimeValue">Oakbrook</span>
              </div>
            </div>
          </div>

          <div className="transportCard">
            <div className="transportCardHeader">Oakbrook Center, Oak Brook (Bus C)</div>
            <div className="transportCardAddress">
              100 Oakbrook Center, Oak Brook, IL 60523 — Lot E (Southwest corner)
            </div>
            <div className="transportCardTimes">
              <div className="transportTime depart">
                <span className="transportTimeLabel">PICKUP</span>
                <span className="transportTimeValue">6:10 AM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime depart">
                <span className="transportTimeLabel">DEPART</span>
                <span className="transportTimeValue">6:25 AM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime arrive">
                <span className="transportTimeLabel">ARRIVE CIF</span>
                <span className="transportTimeValue">~8:30 AM</span>
              </div>
            </div>
          </div>
        </div>

                {/* Evening Buses */}
                <div className="transportSection">
          <div className="transportSegHeader" style={{ backgroundColor: "#FF7DB2" }}>
            <span>EVENING BUSES</span>
          </div>
          <p className="transportDirectionLabel">SIEBEL CENTER FOR CS → DROPOFF LOCATIONS</p>

          {/* Bus C */}
          <div className="transportCard">
            <div className="transportCardHeader">Oakbrook Center, Oak Brook (Bus C)</div>
            <div className="transportCardAddress">
              100 Oakbrook Center, Oak Brook, IL 60523 — Lot E (Southwest corner)
            </div>
            <div className="transportCardTimes">
              <div className="transportTime depart">
                <span className="transportTimeLabel">DEPART SIEBEL</span>
                <span className="transportTimeValue">5:30 PM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime arrive">
                <span className="transportTimeLabel">ARRIVE</span>
                <span className="transportTimeValue">8:30 PM</span>
              </div>
            </div>
          </div>

          <div className="transportCard">
            <div className="transportCardHeader">Woodfield Mall, Schaumburg (Bus C)</div>
            <div className="transportCardAddress">
              5 Woodfield Mall, Schaumburg, IL 60173 — Lot E-30 & E-31 (near Ashley HomeStore)
            </div>
            <div className="transportCardTimes">
              <div className="transportTime depart">
                <span className="transportTimeLabel">DEPART OAKBROOK</span>
                <span className="transportTimeValue">~8:35 PM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime arrive">
                <span className="transportTimeLabel">ARRIVE</span>
                <span className="transportTimeValue">8:45 PM</span>
              </div>
            </div>
          </div>

          {/* Bus B */}
          <div className="transportCard">
            <div className="transportCardHeader">Union Station, Chicago (Bus B)</div>
            <div className="transportCardAddress">225 S Canal St, Chicago, IL 60606</div>
            <div className="transportCardTimes">
              <div className="transportTime depart">
                <span className="transportTimeLabel">DEPART SIEBEL</span>
                <span className="transportTimeValue">5:45 PM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime arrive">
                <span className="transportTimeLabel">ARRIVE</span>
                <span className="transportTimeValue">9:00 PM</span>
              </div>
            </div>
          </div>

          {/* Bus A */}
          <div className="transportCard">
            <div className="transportCardHeader">Naperville Metra Station (Bus A)</div>
            <div className="transportCardAddress">105 E 4th Ave, Naperville, IL 60540</div>
            <div className="transportCardTimes">
              <div className="transportTime depart">
                <span className="transportTimeLabel">DEPART SIEBEL</span>
                <span className="transportTimeValue">6:00 PM</span>
              </div>
              <div className="transportArrow">→</div>
              <div className="transportTime arrive">
                <span className="transportTimeLabel">ARRIVE</span>
                <span className="transportTimeValue">9:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        


      
      </div>
    </div>
  );
}

export default Transportation;