import React from 'react';
import { Container } from "react-bootstrap";
import { BiSolidServer, BiSupport } from "react-icons/bi";
import { FaLaptopCode, FaMoneyCheck } from "react-icons/fa";
import { HiMiniBellAlert, HiMiniUserGroup } from "react-icons/hi2";
import { MdLocalPolice } from "react-icons/md";
import { TiFlowMerge } from "react-icons/ti";
import { TbAntennaBars5 } from "react-icons/tb";

export const Offerings = () => {
  return (
    <div className="offerings" id="offerings">
      <Container>
        <div class="container-heading-offering">
          <div className="line-left"></div>
          <span className="heading">What are we offering ?</span>
          <div className="line-right"></div>
        </div>
        <div className="offering-tabs">
          <div className="tab">
            <div className="icon-container">
              <BiSolidServer className="icon" />
            </div>
            <div className="details">
              <p className="title">24/7 Server Uptime</p>
              <p className="desc">
                Enjoy a seamless experience with our always-online server.
              </p>
            </div>
          </div>
          <div className="tab">
            <div className="icon-container">
              <FaMoneyCheck classNme="icon" />
            </div>
            <div className="details">
              <p className="title">Realistic Economy</p>
              <p className="desc">
                Engage in a thriving, player-driven economic system.
              </p>
            </div>
          </div>
          <div className="tab">
            <div className="icon-container">
              <TbAntennaBars5 classNme="icon" />
            </div>
            <div className="details">
              <p className="title">Immersive Roleplay Experience </p>
              <p className="desc">
                Dive into rich, realistic scenarios and storytelling.
              </p>
            </div>
          </div>
          <div className="tab">
            <div className="icon-container">
              <HiMiniUserGroup classNme="icon" />
            </div>
            <div className="details">
              <p className="title">Friendly Community</p>
              <p className="desc">
                Connect with players who make every interaction enjoyable.
              </p>
            </div>
          </div>
          <div className="tab">
            <div className="icon-container">
              <BiSupport classNme="icon" />
            </div>
            <div className="details">
              <p className="title">Supportive Staff </p>
              <p className="desc">
                Count on our dedicated team for assistance and smooth gameplay.
              </p>
            </div>
          </div>
          <div className="tab">
            <div className="icon-container">
              <MdLocalPolice classNme="icon" />
            </div>
            <div className="details">
              <p className="title">Active PD, EMS and DOJ </p>
              <p className="desc">
                Experience responsive, realistic law and emergency services.
              </p>
            </div>
          </div>
          <div className="tab">
            <div className="icon-container">
              <TiFlowMerge classNme="icon" />
            </div>
            <div className="details">
              <p className="title">High FPS and Low Ping </p>
              <p className="desc">Enjoy smooth performance with minimal lag.</p>
            </div>
          </div>
          <div className="tab">
            <div className="icon-container">
              <FaLaptopCode classNme="icon" />
            </div>
            <div className="details">
              <p className="title">Active Development</p>
              <p className="desc">
                Benefit from continuous enhancements driven by player feedback.
              </p>
            </div>
          </div>
          <div className="tab">
            <div className="icon-container">
              <HiMiniBellAlert classNme="icon" />
            </div>
            <div className="details">
              <p className="title">Daily Updates</p>
              <p className="desc">Engaging daily updates for more fun !</p>
            </div>
          </div>
        </div>
        {/* </div>
          )}
        </TrackVisibility> */}
      </Container>
    </div>
  );
};
