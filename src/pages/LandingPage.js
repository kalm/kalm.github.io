/**
 * Landing Page
 * - Loads all the required components
 */

/* Imports -------------------------------------------------------------------*/

import Inferno from 'inferno'; // eslint-disable-line
import VideoComponent from '../components/VideoComponent';
import VideoComponentV2 from '../components/VideoComponentV2';
import CodeComponent from '../components/CodeComponent';

/* Exports -------------------------------------------------------------------*/

export default function LandingPage() {
	return (
		<div>
			<VideoComponent />
			<CodeComponent />
		</div>
	);
}
