import Grid from "@mui/material/Grid";
import HotelCard from "../component/HotelCard";
import { Container, Typography } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import NavBar from "../component/NavBar";

const Home = () => {
  const [hotels, sethotels] = useState([]);
  const locationDetails = useLocation();
  console.log(locationDetails);

  useEffect(() => {
    axios
      .get("https://hotels-api-4ltr.onrender.com/api/hotels")
      .then((response) => {
        console.log(response);
        sethotels(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      
      <Container maxWidth="lg" sx={{ marginTop: 10 }}>
        <Typography variant="h4">
          Welcome {locationDetails.state.userNmae}
        </Typography>
        <Grid container spacing={2}>
          {hotels.map((hotel) => {
            return (
              <Grid key={hotel.id} item md={4}>
                <HotelCard hotel={hotel} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
