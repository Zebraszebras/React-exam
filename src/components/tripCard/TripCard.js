import React, { useState, useEffect } from "react";
import styles from "./styles.module.css";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const TripCard = ({ destination, id, imageUrl, date, duration }) => {
  const router = useRouter();
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  return (
    <>
      <Link href={`/trip/${id}`} className={styles.link}>
        <div className={styles.card}>
          <div className={styles.destination}>{destination}</div>
          <img className={styles.imageUrl} src={imageUrl} alt="Trip" />
          <div className={styles.date}>
            {date}
            <br />
            Duration {duration}
          </div>
        </div>
      </Link>
    </>
  );
};

export default TripCard;
