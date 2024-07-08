
import './App.css';
import AppControls from './components/appControl';
import HeadSet from './components/headSet';
import HeroSection from './components/heroSection';
import Photos_videos from './components/photo_videos';
import VisionPro from './components/visionPro';
import VrHeadset from './components/vrHeadset';


function App() {
  return (
    <div>
      <HeroSection />
      <VisionPro />
      <VrHeadset />
      <AppControls/>
      <Photos_videos/>
      <HeadSet />
    </div>

  );
}

export default App;
