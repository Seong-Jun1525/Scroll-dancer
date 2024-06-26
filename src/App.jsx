import styled from "styled-components"
import MainCanvas from "./components/MainCanvas"
import { RecoilRoot } from "recoil"
import FixedDOM from "./components/dom/FixedDOM"

/** RecoilRoot
 * React의 Context API처럼 Recoil을 하위 컴포넌트에서 사용 가능하도록 하는 Context 제공
 * 즉, Provider 역할
 */

function App() {
  return (
    <RecoilRoot>
      <Wrapper>
        <MainCanvas />
        <FixedDOM />
      </Wrapper>
    </RecoilRoot>
  )
}

export default App


const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden
`