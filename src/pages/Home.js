import React, { useContext, useEffect } from "react";
import Navbar from "../components/Navbar";
import { Navigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import { checkToken } from "../API/auth";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  useEffect(() => {
    setUser(checkToken());
  }, []);

  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      <Navbar />
      <div className="main-big-container">
        <div className="scrollbar">
          <body className="body2">
            <section class="imageSection1">
              <p class="text">Majestic Peaks</p>
            </section>
            <section class="sectionLight">
              <h2>About Us</h2>
              <p>
                Welcome to our mountain paradise! At our website, we are
                passionate about sharing the awe-inspiring beauty of the
                mountains with the world. Our team of experienced hikers,
                photographers, and nature enthusiasts is dedicated to capturing
                the essence of these majestic peaks. Through our stunning
                imagery and engaging stories, we aim to inspire a love for
                nature and encourage others to explore the wilderness. Join us
                as we embark on thrilling adventures, discover hidden trails,
                and witness breathtaking sunsets. Come, immerse yourself in the
                serenity of the mountains and let their majestic charm captivate
                your soul.
              </p>
            </section>
            <section class="imageSection2">
              <p class="text">About Us</p>
            </section>
            <section class="sectionDark">
              <h2>Bank with us</h2>
              <p>
                Welcome to our mountain paradise! At our website, we are
                passionate about sharing the awe-inspiring beauty of the
                mountains with the world. Our team of experienced hikers,
                photographers, and nature enthusiasts is dedicated to capturing
                the essence of these majestic peaks. Through our stunning
                imagery and engaging stories, we aim to inspire a love for
                nature and encourage others to explore the wilderness. Join us
                as we embark on thrilling adventures, discover hidden trails,
                and witness breathtaking sunsets. Come, immerse yourself in the
                serenity of the mountains and let their majestic charm captivate
                your soul.
              </p>
            </section>
            <section class="imageSection3">
              <p class="text">Enchanting Offers</p>
            </section>
            <section class="sectionLight">
              <h2>Contact Us</h2>
              <p>
                We would love to hear from you! Whether you have questions,
                feedback, or simply want to share your own mountain experiences,
                we're here to connect with fellow mountain enthusiasts. Reach
                out to us through our contact form or drop us an email at
                xyz@gmail.com. We value your input and are constantly striving
                to improve our website and provide the best possible resources
                for all visitors. Don't hesitate to get in touch - let's
                exchange stories, share our love for the mountains, and
                together, celebrate the beauty of these incredible natural
                wonders.
              </p>
            </section>
            <section class="imageSection1"></section>
          </body>
        </div>
      </div>
    </>
  );
};

export default Home;
