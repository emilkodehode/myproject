import { Canvas, useFrame } from "@react-three/fiber";
import React from "react";
import "./canvascontainer.css"

export function BouncingBalls(){
    return(
        <div className="canvascontainer">
        <Canvas>
            <perspectiveCamera position={[0,0,50]}/>
            <Ball/>
        </Canvas>
        </div>
    )
}

function Ball(){
    const myMesh : any = React.useRef()

    useFrame(({clock})=>{
        myMesh.current.position.x = myMesh.current.position.x + Math.sin(clock.getElapsedTime())
    })
    return(
        <mesh ref={myMesh}>
            <sphereGeometry/>
            <meshBasicMaterial color="royalblue"/>
        </mesh>
    )
}
