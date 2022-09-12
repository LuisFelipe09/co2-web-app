// import {
//   Flex,
//   Button,
//   Tag,
//   TagLabel,
//   Badge,
//   TagCloseButton,
// } from "@chakra-ui/react";
// import { AddIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";
import { UnsupportedChainIdError, useWeb3React } from "@web3-react/core";
import { connector } from "../config/web3/index";
import { useCallback, useEffect, useState } from "react";
import useTruncatedAddress from "../hooks/useTruncateAddress";
import { Wallet } from "../styles/Layout/Wallet";

const WalletData = () => {
  const [balance, setBalance] = useState(0);
  const { active, activate, deactivate, account, error, library } =
    useWeb3React();

  const isUnsupportedChain = error instanceof UnsupportedChainIdError;

  const connect = useCallback(() => {
    activate(connector);
    localStorage.setItem("previouslyConnected", "true");
  }, [activate]);

  const disconnect = () => {
    deactivate();
    localStorage.removeItem("previouslyConnected");
  };

  const getBalance = useCallback(async () => {
    const toSet = await library.eth.getBalance(account);
    setBalance((toSet / 1e18).toFixed(2));
  }, [library?.eth, account]);

  useEffect(() => {
    if (active) getBalance();
  }, [active, getBalance]);

  useEffect(() => {
    if (localStorage.getItem("previouslyConnected") === "true") connect();
  }, [connect]);

  const truncatedAddress = useTruncatedAddress(account);

  return (
    

    active ? (
      <Wallet>
        <p>Connected as {truncatedAddress} </p>
        <button onClick={() => disconnect()}>Disconnect</button>
      </Wallet>
    ) : (
      <Wallet>
        <p>Connect your wallet to start</p>
        <button onClick={() => connect()}>Connect</button>
      </Wallet>
    )
  );
};

export default WalletData;
