import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import './style.scss';
import {
  // CubeCamera,
  // Environment,
  OrbitControls,
  PerspectiveCamera,
  Sparkles,
  Html,
  // Cloud 
} from "@react-three/drei";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import { Ground } from "./Ground";
// import { Car } from "./Car";
// import { Rings } from "./Rings";
import { Boxes } from "./Boxes";
import { FloatingGrid } from "./FloatingGrid";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
// import Experience from './components/Experience';

function Loader() {
  return <Html center>
    <section id="loading-screen">
      <div id="loader">

      </div>
    </section>
  </Html>
}

function CarShow() {
  return (
    <>
      {/* Moves you around using center object as fov */}
      <OrbitControls
        target={[0, 0.35, 0]}
        maxPolarAngle={1.45}
      />
      {/* Camera of the project */}
      <PerspectiveCamera makeDefault fov={90} position={[3, 3, 6]} />

      <color args={[0, 0, 0]} attach="background" />

      {/* <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Car />
          </>
        )}
      </CubeCamera> */}

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      {/* <fog attach={"fog"} args={["#202030", 5, 25]} /> */}

      <Ground />
      <FloatingGrid />
      <Sparkles count={200} scale={[20, 20, 10]} size={1} speed={0.01} />
      {/* <fog attach={"fog"} args={["#202030", 5, 25]} />

            <Cloud
                opacity={0.1}
                speed={0.1}
                width={30}
                depth={0.1}
                segments={40}
            /> */}
      <Boxes />
      {/* <Rings /> */}

      <EffectComposer>
        {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} /> */}
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.3} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0005, 0.0012]} // color offset
        />
      </EffectComposer>
    </>
  );
}

function App() {
  const [navSelected, setNavSelected] = useState(null);
  return (
    <>
      < main>
        <Canvas shadows>
          <Suspense fallback={<Loader />}>
            <CarShow />
          </Suspense>
        </Canvas>

        <div className="header">
          <h1>WELCOME TO MY PORTFOLIO</h1>
        </div>

        <div className="navigation">
          <button onClick={() => setNavSelected(AboutMe)}>About</button>
          <button onClick={() => setNavSelected(Contact)}>Contact Me</button>
          {/* <button>Projects</button> */}
          <button onClick={() => setNavSelected(Resume)}>Resume</button>
        </div>

        <div className={`content-holder ${navSelected ? "show-content" : ""}`}>
          <div className="content-main">
            <button className="close-btn" onClick={() => setNavSelected(null)}>CLOSE</button>
            {navSelected}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;