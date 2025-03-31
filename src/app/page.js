import Image from "next/image";
import HeroSlider from './components/HeroSlider';
import VideoGrid from './components/VideoGrid';

export default function Home() {
  return (
    <>
      <HeroSlider />
      <VideoGrid />
    </>
  );
}
