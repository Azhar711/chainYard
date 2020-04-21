import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "inherit",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  flexDisplay: {
    display: "flex",
    justifyContent: "flex-start",
  },
  rightMargin: { marginRight: "20px" },
});

export default function SingleTransaction(props) {
  const { txHash, txIndex, txVin, txVout } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Single Transaction
        </Typography>
        <Typography className={classes.flexDisplay} variant="h5" component="h2">
          <div className={classes.rightMargin}>Transaction Hash :</div>
          <div>{txHash}</div>
        </Typography>
        <Typography className={classes.flexDisplay} variant="h5" component="h2">
          <div className={classes.rightMargin}>Transaction Index :</div>
          <div>{txIndex}</div>
        </Typography>
        <Typography className={classes.flexDisplay} variant="h5" component="h2">
          <div className={classes.rightMargin}>Transaction Input :</div>
          <div>{txVin}</div>
        </Typography>
        <Typography className={classes.flexDisplay} variant="h5" component="h2">
          <div className={classes.rightMargin}>Transaction Out :</div>
          <div>{txVout}</div>
        </Typography>
      </CardContent>
    </Card>
  );
}
