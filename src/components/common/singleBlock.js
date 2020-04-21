import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: 'inherit'
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

export default function SingleBlock(props) {
  const { blockHash, transactCount, blockIndex } = props;
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Single Block
        </Typography>
        <Typography className={classes.flexDisplay} variant="h5" component="h2">
          <div className={classes.rightMargin}>Block Hash :</div>
          <div>{blockHash}</div>
        </Typography>
        <Typography className={classes.flexDisplay} variant="h5" component="h2">
          <div className={classes.rightMargin}>Block Index :</div>
          <div>{blockIndex}</div>
        </Typography>
        <Typography className={classes.flexDisplay} variant="h5" component="h2">
          <div className={classes.rightMargin}>Transaction Count :</div>
          <div>{transactCount}</div>
        </Typography>
      </CardContent>
    </Card>
  );
}
