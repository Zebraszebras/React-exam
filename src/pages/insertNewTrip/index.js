import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import { useRouter } from "next/router";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/footer/Footer";

const InsertNewTripPage = () => {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [duration, setDuration] = useState("");
  const [date, setDate] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const InsertNewTrip = async () => {
    const response = await axios.post(
      "https://643d6ef5f0ec48ce905c44fe.mockapi.io/trips",
      {
        destination: destination,
        duration: duration,
        date: date,
        imageUrl: imageUrl,
      }
    );

    console.log("response", response);
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
      router.push("/");
    }, 9000); 
  };

  useEffect(() => {
    if (showMessage) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [showMessage]);

  return (
    <div>
      <Navbar />
      <div className={styles.newTripForm}>
        <input
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
          placeholder="Your destination"
        />

        <input
          value={duration}
          onChange={(event) => setDuration(event.target.value)}
          placeholder="Duration"
        />

        <input
          value={date}
          onChange={(event) => setDate(event.target.value)}
          placeholder="Date"
        />

        <input
          value={imageUrl}
          onChange={(event) => setImageUrl(event.target.value)}
          placeholder="Image Url"
        />

        <button className={styles.button} onClick={InsertNewTrip}>Insert New Trip</button>
      </div>

      {showMessage && (
        <div className={styles.messageOverlay}>
          <div className={styles.messageContainer}>
            <img src={imageUrl} alt="Trip Image" />
            <h2>You have successfully added a new trip</h2>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default InsertNewTripPage;
