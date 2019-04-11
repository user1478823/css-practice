import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles.css";

import About 							from "./components/About";

import Home 							from "./pages/0_Home";
import Urban 							from "./pages/1_Urban";
import Transitive 				from "./pages/2_Transitive";
import Retrospective 			from "./pages/3_Retrospective";
import Hielo 							from "./pages/4_Hielo";
import Snapshot 					from "./pages/5_Snapshot";
import SnapshotGallery		from "./components/snapshot/2_GalleryPage";

import GridPractice 			from "./components/GridPractice";
import ImageSlider 				from "./components/ImageSlider";

const Main = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" 							  component={Home} exact />
			<Route path="/about" 					  component={About} />
			<Route path="/grid" 					  component={GridPractice} />
			<Route path="/slider" 				  component={ImageSlider} />
			<Route path="/urban" 					  component={Urban} />
			<Route path="/transitive" 		  component={Transitive} />
			<Route path="/retrospective" 	  component={Retrospective} />
			<Route path="/hielo" 					  component={Hielo} />
			<Route path="/snapshot" 			  component={Snapshot} />
			<Route path="/snap/gallery" 		component={SnapshotGallery} />

		</Switch>
	</BrowserRouter>
);

ReactDOM.render(<Main />, document.getElementById('root'));


