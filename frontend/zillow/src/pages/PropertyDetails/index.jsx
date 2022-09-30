import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectPropertyDetails } from "../../store/slices/properties/selectors";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Box,
  Button,
  Container,
  CssBaseline,
  Divider,
  Grid,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeIcon from "@mui/icons-material/Home";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const PropertyDetails = (props) => {
  const params = useParams();
  const propertyDetails = useSelector((state) =>
    selectPropertyDetails(state, parseInt(params.id))
  );
  const navigate = useNavigate();

  console.log("Property Data: ", propertyDetails);

  const {
    isForRent,
    price,
    title,
    propertyType,
    images,
    description,
    location: { name },
    numberOfRooms,
  } = propertyDetails;

  const buttonText = isForRent ? "Rent" : "Buy";

  return (
    <Container component="main">
      <Grid
        container
        spacing={1}
        direction="row"
        justifyContent={"center"}
        sx={{ mt: 3 }}>
        <Card>
          <Button
            onClick={(e) => navigate("/")}
            variant="outlined"
            startIcon={<ArrowBackIcon />}>
            Go Back
          </Button>
          <CardHeader
            title={title}
            subheader={propertyType}
            action={
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
            }></CardHeader>

          <Carousel
            NextIcon={<ArrowForwardIosIcon />}
            PrevIcon={<ArrowBackIosIcon />}
            indicators={false}
            navButtonsAlwaysVisible
            animation="slide"
            autoPlay={false}>
            {images.map((item, i) => (
              <CardMedia
                component="img"
                height="194"
                image={item.url}
                alt="Paella dish"
              />
            ))}
          </Carousel>

          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
            <Divider />
            <Box sx={{ marginTop: "10px", marginBottom: "10px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}>
                <LocationOnIcon />
                <Typography
                  sx={{ marginLeft: "5px" }}
                  variant="body2"
                  color="text.secondary">
                  {name}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}>
                <HomeIcon />
                <Typography
                  sx={{ marginLeft: "5px" }}
                  variant="body2"
                  color="text.secondary">
                  {" "}
                  Rooms - {numberOfRooms}
                </Typography>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}>
                <AttachMoneyIcon />
                <Typography
                  sx={{ marginLeft: "5px" }}
                  variant="body2"
                  color="text.secondary">
                  {" "}
                  {price}
                </Typography>
              </div>
            </Box>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button sx={{ width: "200px" }} variant={"contained"}>
              {buttonText}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
};

export default PropertyDetails;
