import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Events from './components/Events';
import Officers from './components/Officers';
import Membership from './components/Membership';
import Wicys from './components/Wicys';
import GWC from './components/GWC';
import Contact from './components/Contact';
import SpeedMentoring from './components/f19events/SpeedMentoring';
import IntuitCoding from './components/f19events/IntuitCoding';
import RLadies from './components/f19events/RLadies';
import ATTCyber from './components/f19events/ATTCyber';
import GHCPanel from './components/f19events/GHCPanel';
import CBREPanel from './components/f19events/CBREPanel';
import McAfeeResume from './components/f19events/McAfeeResume';
import FannieMaeResume from './components/f19events/FannieMaeResume';
import FallKickoff from './components/f19events/FallKickoff';
import SpringInternFairWS from './components/s20events/SpringInternFairWS';
import FannieMaeResumeSpring from './components/s20events/FannieMaeResumeSpring';
import SpringKickoff from './components/s20events/SpringKickoff';

import Navbar from './components/CustomNavbar';

class App extends Component {
	render() {
		return (
			<Router>
			<div>
			<Navbar />
			<Route exact path="/" component={Home} />
			<Route path="/events" component={Events} />
			<Route path="/officers" component={Officers} />
			<Route path="/membership-faqs" component={Membership} />
			<Route path="/wicys" component={Wicys} />
			<Route path="/girls-who-code" component={GWC} />
			<Route path="/contact" component={Contact} />
			<Route path="/f19events/speed-mentoring" component={SpeedMentoring} />
			<Route path="/f19events/intuit-coding-ws" component={IntuitCoding} />
			<Route path="/f19events/r-ladies-tech-talk" component={RLadies} />
			<Route path="/f19events/at&t-cybersecurity-panel" component={ATTCyber} />
			<Route path="/f19events/post-ghc-panel" component={GHCPanel} />
			<Route path="/f19events/cbre-diversity-panel" component={CBREPanel} />
			<Route path="/f19events/mcafee-resume-workshop" component={McAfeeResume} />
			<Route path="/f19events/fannie-mae-resume-review" component={FannieMaeResume} />
			<Route path="/f19events/fall-semester-kickoff" component={FallKickoff} />
			<Route path="/s20events/spring-intern-fair-ws" component={SpringInternFairWS} />
			<Route path="/s20events/fannie-mae-spring-resume-review" component={FannieMaeResumeSpring} />
			<Route path="/s20events/spring-semester-kickoff" component={SpringKickoff} />
			</div>
			</Router>
		);
	}
}


export default App;
