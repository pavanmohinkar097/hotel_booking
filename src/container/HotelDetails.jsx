import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState  } from "react";
import { useParams } from "react-router";

const HotelDetails = () => {
  const params = useParams();
  const [hotelInfo, setHotelInfo] = useState({});

  useEffect(() => {
    axios
      .get(`https://hotels-api-4ltr.onrender.com/api/hotels/${params.slug}`)
      .then((response) => {
        console.log(response.data);   https://hotels-api-4ltr.onrender.com/api/hotels
        setHotelInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.slug]);
  return (
    <Container maxWidth="lg" sx={{ marginTop: 3 }}>
      <Typography variant="h4">{hotelInfo.name}
      
      <Grid container justifyContent={"center"}>
        {console.log("HOTELINFO", hotelInfo.images)}
        {hotelInfo.images?.map((image) => {
          return (
            <Grid item lg={4}>
              <img
                src={image.img}
                alt="Hotel"
                style={{
                  width: "95%",
                  borderRadius: "5px",
                  boxShadow: "5px 5px 5px grey",
                  margin: "10px",
                  height:"250px"
                  
                }}
              />
            </Grid>
          );
        })}
      </Grid>
      
      {hotelInfo.aboutThePlace}
     
      </Typography>
    </Container>
  );
};

export default HotelDetails;
