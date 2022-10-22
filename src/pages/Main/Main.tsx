import React from "react";
import {Menu} from "../../components/Menu/Menu";
import {BannerBlock} from "../../components/BannerBlock/BannerBlock";
import {Research} from "../../components/Research/Research";
import {Company} from "../../components/Company/Company";
import {JoinOurTeam} from "../../components/JoinOurTeam/JoinOurTeam";

const Main = () => {
    return <>
        <Menu/>
        <BannerBlock/>
        <Research/>
        <Company/>
        <JoinOurTeam/>
    </>
}

export default Main