import { useTranslation } from 'react-i18next';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Registration from './routes/Registration';
import Welcome from './routes/Welcome';

import './App.css';

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Registration />} />
				<Route path='/welcome' element={<Welcome />} />
			</Routes>
		</Router>
	);
}

export default App;
