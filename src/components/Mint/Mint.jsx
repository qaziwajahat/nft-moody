import gif from "../../assests/egif.gif"
import { React, useState } from "react";
import web3 from "web3"
import "./Mint.css"
const Mint = ({ connecctstatus, setConnectedstatus,  connectedAccount, setConnectedAccount }) => {
    const { REACT_APP_CONTRACT_ADDRESS } = process.env;
  const [contract, setContract] = useState(null);
  const [tokenId, setTokenId] = useState(null);
  const [supply, setTokenSupply] = useState(null);
  const [price, setPrice] = useState();
  const [priceInEth, setPriceInEth] = useState(0.05);
  const [quantity, setQuantity] = useState(1);
  const [minted, setMinted] = useState(false);
  console.log("C", connecctstatus);

  async function connectWallet() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
      const web3 = window.web3;
      const metaMaskAccount = await web3.eth.getAccounts();
      setConnectedstatus(true);
      let splitedMetaMaskAddress;
      if (metaMaskAccount) {
        splitedMetaMaskAddress =
          metaMaskAccount[0].substring(0, 6) +
          "......" +
          metaMaskAccount[0].substring(
            metaMaskAccount[0].length - 4,
            metaMaskAccount[0].length
          );
      }
      setConnectedAccount(splitedMetaMaskAddress);
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert(
        "Non-Ethereum browser detected. You should consider trying MetaMask!"
      );
    }
  }
    return (
        <>
            <div id="Mint" className="container-fluid bg-mint">
                <div className="row">
                    <div className="col-md-6 gif-col">
                        <img className="gif" src={gif} alt=" Box" />
                    </div>
                     <div className="col-md-6 gif-col ">
                        <div className="row">

                        
                        <div className="col-md-10 btngroup ">
                            <h1 className="mint-heading"> 9900 Moody Dumboz</h1>

                            <hr
                                style={{
                                    color: "black",
                                    height: 2,
                                    padding: "0.rem",
                                    margin: "0.3rem",
                                    background: "black",
                                }}
                            />
                            <div className="row">
                                <div className="col-md-4">
                                    <h4 style={{ color: "white" }}>Price</h4>
                                </div>
                                <div className="col-md-4 ">
                                    <h3 className="mint-mid">-</h3>
                                </div>
                                <div className="col-md-4 mx-auto">
                                    <h4 style={{ color: "white" }} className="float-right">0.07ETH</h4>
                                </div>
                            </div>
                            <hr
                                style={{
                                    color: "black",
                                    height: 2,
                                    padding: "0.rem",
                                    margin: "0.3rem",
                                    background: "black",
                                }}
                            />

                            <div className="row">
                                <div className="col-md-4">
                                    <h4 style={{ color: "white" }}>Quantity</h4>
                                </div>
                                <div className="col-md-4">
                                    <div
                                        className="d-flex rounded btngroup justify-content-center"
                                        role="group"
                                        aria-label="First group"
                                    >
                                        <button
                                            type="button"
                                            className="btn bg-black text-white fw-bold btn-size "
                                            onClick={() => {
                                                if (quantity > 1) {
                                                    setQuantity(quantity - 1);
                                                }
                                            }}
                                        >
                                            -
                                        </button>
                                        <button type="button" className="btn text-white btn-size">
                                            {quantity}
                                        </button>
                                        <button
                                            type="button"
                                            className="btn bg-black fw-bold text-white btn-size"
                                            onClick={() => {
                                                if (quantity < 5) {
                                                    setQuantity(quantity + 1);
                                                }
                                            }}
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>
                                <div className="col-md-4 ">
                                    <button className="nav-btn-nav float-right">MAX</button>
                                </div>
                            </div>
                            <hr
                                style={{
                                    color: "black",
                                    height: 2,
                                    padding: "0.rem",
                                    margin: "0.3rem",
                                    background: "black",
                                }}
                            />
                            <div className="row">
                                <div className="col-md-4">
                                    <h4 style={{ color: "white" }}>Total</h4>
                                </div>
                                <div className="col-md-4">
                                    <h3 className="mint-mid">-</h3>
                                </div>
                                <div className="col-md-4 mx-auto">
                                    <h4 style={{ color: "white" }} className="float-right">9900</h4>
                                </div>
                            </div>
                            <hr
                                style={{
                                    color: "black",
                                    height: 2,
                                    padding: "0.rem",
                                    margin: "0.3rem",
                                    background: "black",
                                }}
                            />

                            <p className="text-center py-5">
                                <button href="#Buynft"
                                    className="btn connect-btn  mint-btn"
                                    // onClick={async () => {
                                    //     await connectWallet();
                                    //     await mint();
                                    // }}
                                >
                                    Mint Now
                                </button>

                                <br />
                                <span className="spanNFT">{supply} / 9900</span>
                            </p>
                        </div>
                        </div>
                    </div> 

                </div>

            </div>
        </>
    )
}

export default Mint;