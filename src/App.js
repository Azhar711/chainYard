import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";
import "./App.css";
import Button from "@material-ui/core/Button";
import LatestBlock from "./components/common/card";
import SingleBlock from "./components/common/singleBlock";
import SingleTransaction from "./components/common/singleTransaction";

const useStyles = makeStyles({
  button: {
    color: "black",
    backgroundColor: "white",
    padding: "6px",
    borderRadius: "8px",
    margin: "inherit",
  },
});

function App() {
  const classes = useStyles();
  const [latestBlock, setLatestBlock] = useState();
  const [singleBlock, setSingleBlock] = useState();
  const [transaction, setTransaction] = useState();

  useEffect(() => {
    axios
      .get("http://localhost:9000/latestBlock")
      .then((res) => {
        setLatestBlock(res.data);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  }, []);

  const handleClick = () => {
    axios
      .get(`http://localhost:9000/singleBlock?hash=${latestBlock.hash}`)
      .then((res) => {
        setSingleBlock(res.data);
      })
      .catch((err) => {
        console.log("Error : ", err);
      });
  };

  const handleTransaction = () => {
    const tx_hash = singleBlock && singleBlock.tx && singleBlock.tx[0].hash;
    if (tx_hash) {
      axios
        .get(`http://localhost:9000/singleTransaction?tx_hash=${tx_hash}`)
        .then((res) => {
          setTransaction(res.data);
        })
        .catch((err) => {
          console.log("Error : ", err);
        });
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {latestBlock && (
          <div style={{ margin: "30px" }}>
            <Button
              className={classes.button}
              size="small"
              onClick={handleClick}
            >
              Get Single Block
            </Button>
            <LatestBlock
              blockIndex={latestBlock.block_index}
              blockHash={latestBlock.hash}
              blockHeight={latestBlock.height}
              blockTime={latestBlock.time}
            />
          </div>
        )}
        {singleBlock && (
          <div style={{ margin: "30px" }}>
            <Button
              className={classes.button}
              size="small"
              onClick={handleTransaction}
            >
              Get Single Transaction
            </Button>
            <SingleBlock
              blockHash={singleBlock.hash}
              blockIndex={singleBlock.block_index}
              transactCount={singleBlock.tx && singleBlock.tx.length}
            />
            {transaction && (
              <SingleTransaction
                txHash={transaction.hash}
                txIndex={transaction.tx_index}
                txVin={transaction.vin_sz}
                txVout={transaction.vout_sz}
              />
            )}
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
