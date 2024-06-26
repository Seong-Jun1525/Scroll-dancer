import React from 'react'
import styled from 'styled-components'

const FixedDOM = () => {
  return (
    <FixedDOMWrapper id="fixed">
        <span>
            성준이의 Interactive Web 공부
        </span>
        <img src='/threejs.png' alt='threejs-logo' />
        <span>
            성준이의 Interactive Web 공부
        </span>
    </FixedDOMWrapper>
  )
}

const FixedDOMWrapper = styled.div`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    position: fixed;
    font-size: 8px;
    top: 50%;
    right: 0;
    transform: translate(-50%, -50%);
    display: none;
    color: #fff;
    z-index: 0;
    pointer-events: none;
    img {
        width: 100%;
    }
`

export default FixedDOM