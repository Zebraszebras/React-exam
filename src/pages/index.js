import React from "react";
import axios from "axios";

import TripCard from "@/src/components/tripCard/TripCard";
import styles from "../pages/styles.module.css";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/footer/Footer";

const MainPage = ({ trips }) => {
  
  if (trips.length === 0) {
    return <div>
      <Navbar />
      <div>No trips available.</div>
      </div>
  }

  return (
    <div>
      <Navbar />
      <div className={styles.tripsWrapper}>
        {trips.map((trip) => (
          <div key={trip.id}>
            <TripCard
              id={trip.id}
              destination={trip.destination} // Update the prop name to 'destination'
              imageUrl={trip.imageUrl}
              date={trip.date}
              duration={trip.duration}
            />
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MainPage;

export async function getServerSideProps(ctx) {
  try {
    const response = await axios.get("https://643d6ef5f0ec48ce905c44fe.mockapi.io/trips");
    const { data } = response;

    const trips = data.map((trip) => ({
      id: trip.id,
      destination: trip.destination,
      date: trip.date,
      duration: trip.duration,
      imageUrl: trip.imageUrl,
    }));

    return { props: { trips } };
  } catch (err) {
    console.log(err);
    return { props: { trips: [] } }; // Return an empty array in case of an error
  }
}


