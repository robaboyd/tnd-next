import React from "react";
import Jenn from "../images/jennphoto.png";
import PBtn from "./PBtn";
const AboutSection = props => {
  return (
    <div className="container-fluid about padding-top-30">
      <div className="columns is-centered">
        <div className="column is-8">
          <img className="profile-img" src={Jenn} alt="" />
        </div>
      </div>
      <div className="columns is-centered">
        <div className="column is-6 padding-30">
          <h2>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa quiofficia deserunt mollit anim id est laborum."
          </h2>
          <ul>
            <li>
              {" "}
              <PBtn
                className="social-icons"
                link="https://www.facebook.com/TheTeacherNextDoor"
                external={true}
              >
                <i className="fab fa-facebook"></i>
              </PBtn>{" "}
            </li>
            <li>
              {" "}
              <PBtn
                className="social-icons"
                link="https://www.facebook.com/TheTeacherNextDoor"
                link="https://www.instagram.com/theteachernextdoor/"
                external={true}
              >
                <i className="fab fa-instagram"></i>
              </PBtn>{" "}
            </li>
            <li>
              {" "}
              <PBtn
                className="social-icons"
                link="https://www.facebook.com/TheTeacherNextDoor"
                link="https://www.pinterest.com/TeacherNextDoor/"
                external={true}
              >
                <i className="fab fa-pinterest-square"></i>
              </PBtn>{" "}
            </li>
            <li>
              {" "}
              <PBtn
                className="social-icons"
                link="https://www.facebook.com/TheTeacherNextDoor"
                link="https://www.teacherspayteachers.com/Store/The-Teacher-Next-Door"
                external={true}
              >
                TpT
              </PBtn>{" "}
            </li>
          </ul>
        </div>
      </div>
      <style jsx global>
        {`
          .profile-img {
            width: 270px;
          }

          .about ul {
            list-style-type: none;
            width: 100%;
            text-align: center;
            display: flex;
            justify-content: center;
          }

          .about ul li a {
            float: left;
            margin: 10px;
            font-size: 25px;
            color: #695395;
          }
        `}
      </style>
    </div>
  );
};

export default AboutSection;
