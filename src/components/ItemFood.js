import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DialogDescriptionFoods from "./DialogDescriptionFoods";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";

export default function ItemFood(props) {
  const [open, setOpen] = useState(false);
  const [itemUnique, setItemUnique] = useState({});

  const handleOpenDialog = () => {
    setOpen((prevStateOpen) => !prevStateOpen);
  };
  const handleItem = (item) => {
    setItemUnique(item);
  };

  const { data1 } = props;
  console.log(data1);

  return (
    <>
      {props.data1.map((item) => (
        <Button
          sx={{ margin: "20px", "&.MuiButton-root": { padding: "0px 0px" } }}
          onClick={() => {
            handleOpenDialog();
            handleItem(item);
          }}
        >
          <div key={item.name}>
            <Card
              sx={{
                display: "flex",
                width: "300px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  maxWidth: "180px",
                  margin: "10px 10px 10px 20px",
                  borderRadius: "5px",
                }}
                image={item.image}
                alt="Descripcion"
              />
              {item.combo ? (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Grid
                    sx={{
                      borderBottom: "1px solid rgba(157, 169, 190, 0.8)",
                    }}
                  >
                    <Typography
                      sx={{
                        marginTop: "5px",
                      }}
                      align="center"
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      Combo
                    </Typography>
                    <Typography
                      align="center"
                      variant="subtitle1"
                      color="text.secondary"
                      component="div"
                    >
                      {item?.priceCombo?.slice(2, 4) + " K"}
                    </Typography>
                  </Grid>
                  <Typography
                    sx={{
                      marginTop: "5px",
                    }}
                    align="center"
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    Sola
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "5px",
                    }}
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {item?.priceOnly?.slice(2, 4) + " K"}
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{
                      marginTop: "5px",
                    }}
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {item?.price?.slice(2, 4) + " K"}
                  </Typography>
                </Box>
              )}
            </Card>
          </div>
          {open && <DialogDescriptionFoods open={open} item={itemUnique} />}
        </Button>
      ))}
    </>
  );
}
