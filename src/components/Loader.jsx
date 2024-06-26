import React from 'react'
import { useRecoilState } from 'recoil'
import { IsEnteredAtom } from '../stores'
import { Html, useProgress } from '@react-three/drei'
import styled, { keyframes } from 'styled-components'

const Loader = ({isCompleted}) => {
    /** 
     * - useRecoilValue
     * 해당 값만 필요할 때 사용하는 훅
     * 
     * - useSetRecoilState
     * set만 필요할 때 사용하는 훅
     * 
     * - useRecoilState
     * 값을 변경하기도 할때 사용하는 훅
     */
    const [isEntered, setIsEntered] = useRecoilState(IsEnteredAtom)

    const progress = useProgress()
    console.log(progress)

    if(isEntered) return null

    return (
        <Html center>
            {/* 
                원래 Canvas하위에는 Canvas 요소만이 들어와야 하는데
                drei에서 제공하는 Html컴포넌트를 사용하게 되면
                Canvas요소가 아니더라도 children으로 사용할 수 있음
            */}
            <BlurredBackground />
            <Container>
                <ProgressBar >
                    {isCompleted ? 100 : progress.progress}%
                </ProgressBar>
                <EnterBtn
                    onClick={() => {
                        setIsEntered(true)
                    }}
                >
                    Enter
                </EnterBtn>
            </Container>
        </Html>
    )
}

const blink = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const BlurredBackground = styled.div`
    width: 400px;
    height: 400px;
    background-color: red;
    border-radius: 50%;
    filter: blur(300px)
`
const Container = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
`
/** position: fixed;
 * 가운데 정렬
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
 */


const ProgressBar = styled.div`
    font-size: 24px;
    color: #ccc;
`
const EnterBtn = styled.button`
    animation: ${blink} 1.5s infinite;
    transition-duration: 0.4s;
    font-size: 16px;
    outline: none;
    border: 0.5px solid #999;
    padding: 8px 18px;
    background-color: transparent;
    color: #ccc;
    border-radius: 8px;
    cursor: pointer;
    &:hover {
        background-color: #ccc;
        color: #dc4f00;
    }
`

export default Loader