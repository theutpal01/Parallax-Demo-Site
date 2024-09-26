import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/footer'; 
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsConditions from './components/TermsConditions';
import Rights from './components/Rights';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsConditions />} />
          <Route path="/rights" element={<Rights />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
