import { selector } from "recoil";
import { counterAtom } from "./counter";

export const countValueSelector=selector({
    key:'coilValue',
    get:function ({get}){
        const currentCount=get(counterAtom);
        const isEven=(currentCount %2==0)
        return isEven
    }
})