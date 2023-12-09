/**
* @type import('hardhat/config').HardhatUserConfig
*/

// require('dotenv').config();
import * as dotenv from "dotenv";
import "@nomicfoundation/hardhat-ethers";
dotenv.config();
// import "@nomicfoundation/hardhat-toolbox";


let API_URL = process.env.API_URL;
let PRIVATE_KEY = process.env.PRIVATE_KEY;
// console.log("API_URL", API_URL);
// console.log("PRIVATE_KEY", PRIVATE_KEY);

console.log(API_URL, PRIVATE_KEY);
module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "polygon_mumbai",
   networks: {
      hardhat: {},
      polygon_mumbai: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}