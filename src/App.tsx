
import './App.css';
import Landingbanner from './components/home/Landingbanner';
import Servicespage from './components/home/Servicespage';

import Mainnavbar from './components/navbar/Mainnavbar';

function App() {
  return (
    <div className="landing-banner">
<Mainnavbar />
<Landingbanner />
<Servicespage />
    </div>
  );
}

export default App;
