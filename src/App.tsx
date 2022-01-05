import Login from './Login';
// import Callback from './Callback.tsx';
// import TwitterApi from 'twitter-api-v2';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Login />} />
			{/* <Route path='/callback' element={<Callback />} /> */}
		</Routes>
	</BrowserRouter>
);

export default App;
