import React, { useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { IsEnteredAtom } from '../../stores'
import { Scroll, useScroll } from '@react-three/drei'
import styled from 'styled-components'
import { useFrame } from '@react-three/fiber'

const MovingDOM = () => {
    const isEntered = useRecoilValue(IsEnteredAtom)
    const fixed = document.getElementById('fixed')

    const scroll = useScroll()

    const article01Ref = useRef(null)
    const article02Ref = useRef(null)
    const article03Ref = useRef(null)
    const article04Ref = useRef(null)
    const article08Ref = useRef(null)

    useFrame(() => {
        if(!isEntered
            || !fixed
            || !article01Ref.current
            || !article02Ref.current
            || !article03Ref.current
            || !article04Ref.current
            || !article08Ref.current) return

        /** 메모
         * 페이지가 총 8개
         * 아무것도 스크롤하지 않았을 경우 0 맨 마지막이 1
         * 
         * range함수의 역할
         * 0의 위치에서는 0을 반환. 1/8 위치에서는 1을 반환
         * 하지만 식의 처음에서 '1 - '를 해줘서
         * 첫 위치에서는 1을 반환하고 1/8 위치에서는 0을 반환하게 됨
         * 
         * 즉, articleRef의 opacity 속성이 처음위치에서는 1로 선명했다가
         * 점점 페이지가 끝나가는 시점에서는 0이 되어 보이지 않는 효과를 연출함
         * 
         * curve 함수의 역할
         * 처음과 끝에서 모두 0을 반환하고 중간에서 1을 반환
         */

        article01Ref.current.style.opacity = `
            ${1 - scroll.range(0, 1 / 8)}
        `
        article02Ref.current.style.opacity = `
            ${1 - scroll.range(1 / 8, 1 / 8)}
        `
        article03Ref.current.style.opacity = `
            ${scroll.curve(2 / 8, 1 / 8)}
        `
        article04Ref.current.style.opacity = `
            ${scroll.curve(3 / 8, 1 / 8)}
        `
        if(scroll.visible(4 / 8, 3 / 8)) {
            fixed.style.display = 'flex'
            fixed.style.opacity = `${scroll.curve(4 / 8, 3 / 8)}`
        }
        else {
            fixed.style.display = 'none'
        }
        article08Ref.current.style.opacity = `
            ${scroll.range(7 / 8, 1 / 8)}
        `
    })

    if(!isEntered) return null

    return (
        <Scroll html>
            <ArticleWrapper ref={article01Ref}>
                <LeftBox>
                    <span>유한대학교</span>
                    <span>유한대학교</span>
                    <span>유한대학교</span>
                    <span>유한대학교</span>
                    <span>유한대학교</span>
                </LeftBox>
            </ArticleWrapper>
            <ArticleWrapper ref={article02Ref}>
                <RightBox>
                    <span>컴퓨터소프트웨어공학과</span>
                    <span>컴퓨터소프트웨어공학과</span>
                    <span>컴퓨터소프트웨어공학과</span>
                    <span>컴퓨터소프트웨어공학과</span>
                    <span>컴퓨터소프트웨어공학과</span>
                </RightBox>
            </ArticleWrapper>
            <ArticleWrapper ref={article03Ref}>
                ThreeJS R3F Study
            </ArticleWrapper>
            <ArticleWrapper className='height-4' ref={article04Ref}>
                <RightBox>
                    <span>임성준</span>
                    <span>임성준</span>
                    <span>임성준</span>
                    <span>임성준</span>
                    <span>임성준</span>
                </RightBox>
            </ArticleWrapper>
            <ArticleWrapper ref={article08Ref}>
                {`Developer : SeongJun`}
                <Footer>
                    {`Developer : SeongJun`}
                </Footer>
            </ArticleWrapper>
        </Scroll>
    )
}

const ArticleWrapper = styled.div`
    display: flex;
    flex-direction: center;
    justify-content: center;
    align-items: center;
    opacity: 0;
    width: 100vw;
    height: 100vh;
    &.height-4 {
        height: 400vh;
    }
    background-color: transparent;
    color: #ffffff;
    font-size: 24px;
    padding: 40px;
`

const LeftBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: flex-start;
    min-width: fit-content;
    height: 400px;
    & > span:nth-of-type(1) {
        font-size: 32px;
    }
    & > span:nth-of-type(2) {
        font-size: 48px;
    }
    & > span:nth-of-type(3) {
        font-size: 16px;
    }
    & > span:nth-of-type(4) {
        font-size: 24px;
    }
    & > span:nth-of-type(5) {
        font-size: 28px;
    }
`

const RightBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    min-width: fit-content;
    height: 400px;
    & > span:nth-of-type(1) {
        font-size: 32px;
        font-weight: 400;
    }
    & > span:nth-of-type(2) {
        font-size: 32px;
        font-weight: 500;
    }
    & > span:nth-of-type(3) {
        font-size: 32px;
        font-weight: 600;
    }
    & > span:nth-of-type(4) {
        font-size: 32px;
        font-weight: 700;
    }
    & > span:nth-of-type(5) {
        font-size: 32px;
        font-weight: 800;
    }
`

const Footer = styled.div`
    position: absolute;
    bottom: 10px;
    font-size: 8px;
`

export default MovingDOM