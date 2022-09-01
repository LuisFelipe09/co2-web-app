
import Link from 'next/link'
import { useWeb3React } from "@web3-react/core";
import useContractConnection from "../hooks/useContractConnection";
import useTruncatedAddress from "../hooks/useTruncatedAddress";
import { useCallback, useEffect, useState } from "react";

const Home = () => {    
  
    const { active, account } = useWeb3React();
    const contract = useContractConnection();    
  
    const address = useTruncatedAddress(account);
  
    return (
      <h1>Start Page</h1>
    );
};
  
export default Home;
  