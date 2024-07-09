import Image from "next/image";
import React from "react";
import Landingpage from '../app/LandingPage/page'
import { connect } from "../dbconfig/dbconfig";

export default  async function Home() {
 
  return (
   <>
   <Landingpage></Landingpage>
   </>
  );
}
