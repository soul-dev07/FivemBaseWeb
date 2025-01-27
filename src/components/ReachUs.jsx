import React from 'react';
import { useState } from "react";
import { Container, Col } from "react-bootstrap";
import "animate.css";
import toast, { Toaster } from "react-hot-toast";

export const ReachUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const notify = () => {};

  const webhookUrl =
    "https://discord.com/api/webhooks/1325818022178455633/P8zOBnvB-p2A0nwkBrLP5UTBboQpK533bXSzusqwySlHRzT6_AopJHgQEtl2u4dbdpqX";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const payload = {
      content: `**New Contact Response !!**\n- **First Name:** ${firstName}\n- **Last Name:** ${lastName}\n- **Email:** ${email}\n- **Phone:** ${phone}\n- **Message:** ${message}`,
    };

    try {
      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        toast.success("Submitted Successfully!", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: 1,
          theme: "dark",
          transition: "Slide",
        });
        // Clear form inputs
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      } else {
        toast.error("Kindly fillup all the required details!", {
          position: "bottom-center",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: false,
          draggable: false,
          progress: 0.1,
          theme: "dark",
          transition: "Slide",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Kindly fillup all the required details!", {
        position: "bottom-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: false,
        progress: 0.1,
        theme: "dark",
        transition: "Slide",
      });
    }
  };

  return (
    <section className="contact" id="reach">
      <Container>
        <div className="contact-heading">
          <div className="line-left"></div>
          <div className="heading">Contact</div>
        </div>
        <div className="contact-main">
          <div className="form-data">
            <form onSubmit={handleSubmit} className="form-details">
              <Col size={12} sm={6} className="px-1">
                {/* <Label>Character Name</Label> */}
                <input
                  type="text"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="email"
                  placeholder="Email ID"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <input
                  type="text"
                  placeholder="Phone No."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </Col>
              <Col size={12} sm={6} className="px-1">
                <textarea
                  type="text"
                  placeholder="Type Your Message Here"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                />
              </Col>
              <button type="submit" onClick={notify} className="send-btn">
                <Toaster position="bottom-center" />
                <span>Submit</span>
              </button>
            </form>
          </div>
          <div className="contact-text">
            <Col className="contact-text-heading">
              <div className="heading">Have Any Doubt ?</div>
              <div className="sub-heading">Feel Free To Reach us !!</div>
            </Col>
          </div>
          {/* <Info /> */}
        </div>
      </Container>
    </section>
  );
};
