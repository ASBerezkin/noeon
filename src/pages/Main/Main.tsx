import React from "react";
import {Menu} from "../../components/Menu/Menu";
import {BannerBlock} from "../../components/BannerBlock/BannerBlock";
import {Research} from "../../components/Research/Research";
import {CompanyLocation} from "../../components/Company/CompanyLocation";
import {JoinOurTeam} from "../../components/JoinOurTeam/JoinOurTeam";

const Main = () => {
    return <>
        <Menu/>
        <BannerBlock/>
        <Research/>
        <CompanyLocation/>
        <JoinOurTeam/>
    </>
}

export default Main