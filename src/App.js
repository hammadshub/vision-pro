
import './App.css';
import AppControls from './components/appControl';
import HeadSet from './components/headSet';
import HeroSection from './components/heroSection';
import ParallaxApp from './components/ParallaxApp';
import ParallaxComponent from './components/ParallaxComponent';
import ParallaxEntertainment from './components/ParallaxEntertainment';
import Photos_videos from './components/photo_videos';
import ReusableSection from './components/ReusableSection';
import ScrollOver from './components/scrollOver';
import VisionPro from './components/visionPro';
import VrHeadset from './components/vrHeadset';


function App() {
  return (
    <div>
      <HeroSection />
      <ParallaxComponent />
      <ScrollOver />
      {/* <VisionPro  videoBackgroundRef="visionProSectionOne" /> */}
      <VrHeadset />
      {/* <AppControls/> */}
      <ParallaxApp/>
      <ReusableSection 
        heading="Apps" 
        content="Let your apps be as free as your ideas." 
      />
      {/* <Photos_videos/> */}
      {/* <VisionPro videoBackgroundRef="visionProSectionTwo" /> */}
      <HeadSet />
      <ParallaxEntertainment />
      <ReusableSection
        heading="Photos and videos"
        content="Experience the moment. Again and again."
      />
    </div>

  );
}

export default App;
