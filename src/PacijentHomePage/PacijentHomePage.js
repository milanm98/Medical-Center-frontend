import React from "react";
import "../HomePage/landingPage.css";
import PacijentNavBar from "./PacijentNavBar";
import PacijentSideBar from './PacijentSideBar';
import { BrowserRouter,Route,Switch} from "react-router-dom"
import Apoteke from "./Apoteke/Apoteke";
import ERecepti from "./ERecepti/ERecepti";
import IstorijaPosetaDermatologu from "./IstorijaPosetaDermatologu/IstorijaPosetaDermatologu";
import Penali from "./Penali/Penali";
import RezervisaniLekovi from "./RezervisaniLekovi/RezervisaniLekovi";
import SavetovanjeKodFarmaceuta from "./SavetovanjeKodFarmaceuta/SavetovanjeKodFarmaceuta";
import ZakazanePosete from "./ZakazanePosete/ZakazanePosete";
import Zalbe from "./Zalbe/Zalbe";
import AzurirajPodatke from "./AzurirajPodatke";

export default function PacijentHomePage() {
    return (
      <main id="background" className="bg-fixed h-full w-full">

        <BrowserRouter>
          <PacijentNavBar/>
          <PacijentSideBar/>

          <Switch>
            <Route component={AzurirajPodatke} path='/Pacijent/AzurirajPodatke' />
		        <Route component={Apoteke} path='/Pacijent/Apoteke' />
		        <Route component={ERecepti} path='/Pacijent/ERecepti' />
            <Route component={IstorijaPosetaDermatologu} path='/Pacijent/IstorijaPosetaDermatologu' /> 
            <Route component={Penali} path='/Pacijent/Penali' />
            <Route component={RezervisaniLekovi} path='/Pacijent/RezervisaniLekovi' />
            <Route component={SavetovanjeKodFarmaceuta} path='/Pacijent/SavetovanjeKodFarmaceuta' />
            <Route component={ZakazanePosete} path='/Pacijent/ZakazanePosete' />
            <Route component={Zalbe} path='/Pacijent/Zalbe/' />
          </Switch>

        </BrowserRouter>
       
      </main>
    )
}