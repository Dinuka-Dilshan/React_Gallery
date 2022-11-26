import ReactGallery from "./Components/ReactGallery";
import images from "./Data/images.json";

function App() {
  return <ReactGallery images={images} width={600} height={700} />;
}

export default App;
