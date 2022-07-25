import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function DialogDescriptionFoods(props: Props) {
  const { open, item } = props;
  console.log(item);
  return (
    <Dialog fullWidth maxWidth={"sm"} open={open}>
      <DialogTitle>{item.title}</DialogTitle>
      <DialogContent>
        <Grid container>
          <CardMedia
            component="img"
            sx={{
              borderRadius: "5px",
            }}
            image={item.image}
            alt="Descripcion"
          />
          <CardContent
            sx={{
              "&.MuiCardContent-root:last-child": {
                padding: "20px auto 20px",
              },
            }}
          >
            <Typography variant="subtitle1" align={"center"}>
              {item.description}
            </Typography>
            {item.combo ? (
              <Grid container justifyContent="space-between">
                <Typography
                  sx={{ marginTop: "25px" }}
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Combo con papas fritas: {item.priceCombo}
                </Typography>
                <Typography
                  sx={{ marginTop: "25px" }}
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Sola: {item.priceOnly}
                </Typography>
              </Grid>
            ) : (
              <Typography
                sx={{ marginTop: "25px" }}
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {item.price} con papas fritas
              </Typography>
            )}
          </CardContent>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
