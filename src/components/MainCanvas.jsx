import { Canvas } from '@react-three/fiber'
import * as THREE from 'three'
import React, { Suspense } from 'react'
import { Box, OrbitControls, ScrollControls } from '@react-three/drei'
import Dancer from './Dancer'
import Loader from './Loader'
import MovingDOM from './dom/MovingDOM'
import { useRecoilValue } from 'recoil'
import { IsEnteredAtom } from '../stores'

const MainCanvas = () => {
    const isEntered = useRecoilValue(IsEnteredAtom)
    const aspectRatio = window.innerWidth / window.innerHeight

    return (
        <Canvas
            id='canvas'
            gl={{antialias: true}}
            shadows="soft"
            camera={{
                fov: 30,
                aspect: aspectRatio,
                near: 0.01,
                far: 1000,
                position: [0, 6, 12]
            }}
            scene={{background: new THREE.Color(0x000000)}}
        >
            <ScrollControls
                pages={isEntered ? 8 : 0}
                damping={0.25} // 부드럽게 이동하고자 할 때 사용
            >
                <Suspense fallback={<Loader />}>
                    {/* Suspense
                        - 비동기 로직에서 로직이 해결되지 않았을 때 fallback 컴포넌트를 보여주게 되는데
                          그 컴포넌트가 Loader 컴포넌트이다
                    */}
                    <Dancer />
                </Suspense>
                <MovingDOM />
            </ScrollControls>
        </Canvas>
    )
}

export default MainCanvas