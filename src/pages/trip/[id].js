import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "@/src/components/footer/Footer";

const Trip = () => {
  const [trip, setTrip] = useState(null);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);
  const router = useRouter();

  const fetchTrip = async () => {
    try {
      const response = await axios.get(
        `https://643d6ef5f0ec48ce905c44fe.mockapi.io/trips/${router.query.id}`
      );
      const { data } = response;
      setTrip(data);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (router.query.id) {
      fetchTrip();
    }
  }, [router.query.id]);

  const deleteTrip = async () => {
    try {
      await axios.delete(
        `https://643d6ef5f0ec48ce905c44fe.mockapi.io/trips/${router.query.id}`
      );
      console.log("Trip deleted successfully");
      setShowDeleteMessage(true);
      setTimeout(() => {
        setShowDeleteMessage(false);
        router.push("/");
      }, 6000);
      
    } catch (error) {
      console.error("Error deleting trip:", error);
      
    }
  };

  useEffect(() => {
    if (showDeleteMessage) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
  }, [showDeleteMessage]);

  return (
    <>
      <Navbar />
      <div className={styles.pageWrapper}>
        {trip && (
          <div className={styles.wrapper}>
            <h1 className={styles.destination}>{trip.destination}</h1>
            <img className={styles.image} src={trip.imageUrl} alt="Trip" />

            <div className={styles.contentWrapper}>
              <div className={styles.tripInfo}>
                <h3>{trip.date}</h3>
                <h2>{trip.duration}</h2>
              </div>
              <div>
                <button className={styles.deleteButton} onClick={deleteTrip}>
                  Delete this Trip
                </button>
              </div>
            </div>

            {showDeleteMessage && (
              <div className={styles.messageOverlay}>
                <div className={styles.deleteMessageContainer}>
                  <img src={trip.imageUrl} alt="Trip Image" />
                  <h2>You have successfully deleted this trip</h2>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Trip;


