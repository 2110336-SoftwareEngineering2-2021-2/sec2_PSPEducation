import "./sidebar.css";
import {
  DateRange,
  DynamicFeedOutlined,
  ForumOutlined,
  MoreHorizOutlined,
} from "@mui/icons-material";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <div className="sidebarTitleLeft">
              <div className="sidebarTitleName">Today's Class</div>
              <div className="sidebarTitleBadge">3</div>
            </div>
            <div className="sidebarTitleRight">
              <div className="sidebarTitleIcon">
                <DateRange />
              </div>
            </div>
          </div>
          <ul className="sideBarList">
            <li className="sidebarListItem">
              <span className="classTime">10:00-12:00</span>
              <span className="classSubject">Maths</span>
              <span className="classLocation">@SiamDiscovery</span>
            </li>
            <li className="sidebarListItem">
              <span className="classTime">14:00-16:00</span>
              <span className="classSubject">English</span>
              <span className="classLocation">@SiamKitt(Holly)</span>
            </li>
            <li className="sidebarListItem">
              <span className="classTime">16:30-18:00</span>
              <span className="classSubject">Physics</span>
              <span className="classLocation">@SamyanMitrtown</span>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <div className="sidebarTitleLeft">
              <div className="sidebarTitleName">Appointment Request</div>
              <div className="sidebarTitleBadge">2</div>
            </div>
            <div className="sidebarTitleRight">
              <div className="sidebarTitleIcon">
                <DynamicFeedOutlined />
              </div>
            </div>
          </div>

          <div className="appointmentCardList">
            <div className="appointmentCard">
              <img
                src="https://somoskudasai.com/wp-content/uploads/2020/12/yotsuba-nakano-somoskudasai.jpg"
                alt=""
                className="appointmentAvatar"
              />
              <div className="appointmentInfo">
                <div className="appointmentTitle">
                  <div className="appointmentFullname">Yotsuba Nakano</div>
                  <div className="appointmentUsername">@yotsuba428</div>
                </div>
                <div className="appointmentDetail">
                  <div className="appointmentDeatilWrapper">
                    <div className="appointmentDetailUpper">
                      <div className="appointmentDay">Mon</div>
                      <div className="appointmentDate">17 Jan 2022</div>
                    </div>
                    <div className="appointmentDetailLower">
                      <div className="appointmentTime">16:30-18:30</div>
                      <div className="appointmentLocation">at Living Room</div>
                    </div>
                  </div>
                  <div className="appointmentEarns">$105</div>
                </div>
              </div>
            </div>
            <div className="appointmentCard">
              <img
                src="https://i.pinimg.com/736x/1c/4f/4c/1c4f4c7010a0b7ca14e32baa83fe2181.jpg"
                alt=""
                className="appointmentAvatar"
              />
              <div className="appointmentInfo">
                <div className="appointmentTitle">
                  <div className="appointmentFullname">Miku Nakano</div>
                  <div className="appointmentUsername">@n.miku0505</div>
                </div>
                <div className="appointmentDetail">
                  <div className="appointmentDeatilWrapper">
                    <div className="appointmentDetailUpper">
                      <div className="appointmentDay">Tue</div>
                      <div className="appointmentDate">18 Jan 2022</div>
                    </div>
                    <div className="appointmentDetailLower">
                      <div className="appointmentTime">10:00-12:00</div>
                      <div className="appointmentLocation">
                        at School Library
                      </div>
                    </div>
                  </div>
                  <div className="appointmentEarns">$84</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sidebarMenu">
          <div className="sidebarTitle">
            <div className="sidebarTitleLeft">
              <div className="sidebarTitleName">Message Request</div>
              <div className="sidebarTitleBadge">1</div>
            </div>
            <div className="sidebarTitleRight">
              <div className="sidebarTitleIcon">
                <ForumOutlined />
              </div>
            </div>
          </div>

          <div className="messageCardList">
            <div className="messageCard">
              <img
                src="http://pm1.narvii.com/7164/138f64a909260c53492ff549125858e140372130r1-750-750v2_00.jpg"
                alt=""
                className="appointmentAvatar"
              />
              <div className="messageInfo">
                <div className="messageSenderTitle">
                  <div className="messageSenderFullname">Itsuki Nakano</div>
                  <div className="messageSenderUsername">@it-tsuki5</div>
                </div>
                <div className="messageContent">
                  Uesugu-kun, we'll be waiting at Cafe.
                </div>
              </div>
              <MoreHorizOutlined className="messageMoreIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
