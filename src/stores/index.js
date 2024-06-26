import { atom } from "recoil";

// 전역에서 로딩이 끝난 후 MainPage에 입장을 했는지 여부를 판단할 전역상태
export const IsEnteredAtom = atom({
    key: "IsEnteredAtom",
    default: false
})