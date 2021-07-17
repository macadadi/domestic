
import './App.css';
import Advartvid from './components/home/Advartvid';
import Customers from './components/home/Customers';
import Landingbanner from './components/home/Landingbanner';
import Partners from './components/home/Partners';
import Playstore from './components/home/Playstore';
import Projectfooter from './components/home/Projectfooter';
import Quetions from './components/home/Quetions';
import Servicespage from './components/home/Servicespage';
import Mainnavbar from './components/navbar/Mainnavbar';


function App() {
  return (
    <div className="landing-banner">
<Mainnavbar />
<Landingbanner />
<Servicespage />
<Advartvid />
<Partners />
<Customers />
<Quetions />
<Playstore />
<Projectfooter />
    </div>
  );
}

export default App;
