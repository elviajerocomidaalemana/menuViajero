import * as React from "react";
import {useState} from 'react'
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DialogDescription from "./DialogDescription";



export default function MediaControlCard(props) {
  const [open, setOpen] = useState(false);
  const [itemUnique,setItemUnique]=useState({})

  const handleOpenDialog = () => {
    setOpen((prevStateOpen) => !prevStateOpen);
  };
  const handleItem = (item) => {
    setItemUnique(item);
  };

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
                width: "250px",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              <CardMedia
                component="img"
                sx={{
                  width: 40,
                  margin: "10px 10px 10px 20px",
                  borderRadius: "5px",
                }}
                image={item.image}
                alt="Descripcion"
              />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CardContent
                  sx={{
                    "&.MuiCardContent-root:last-child": {
                      padding: "20px auto 20px",
                    },
                  }}
                >
                  <div
                    style={{
                      overflow: "hidden",
                      maxWidth: "155px",
                      height: "80px",
                      padding: "0 0 20px 0",
                    }}
                  >
                    <Typography
                      sx={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        display: "-webkit-box",
                        WebkitLineClamp: "3",
                        WebkitBoxOrient: "vertical",
                      }}
                      variant="subtitle1"
                      align={"center"}
                    >
                      {item.description}
                    </Typography>
                  </div>
                  <Typography
                    sx={{ marginTop: "5px" }}
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {item.price}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </div>
          {open && (
            <DialogDescription
              open={open}
              item={itemUnique}
            />
          )}
        </Button>
      ))}
    </>
  );
}
