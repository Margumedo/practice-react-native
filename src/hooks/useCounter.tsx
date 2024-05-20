import { useState } from "react";

interface Options {
    intialValue?: number;
}

export const useCounter = ({ intialValue = 0 }: Options) => {

    const [count, setCount] = useState<number>(intialValue);

    const increseBy = (num: number) => {

        const newValue = count + num

        if (newValue < 0) return;

        setCount(newValue)

    }


    return {
        // properties
        count,

        //methods
        increseBy,
    }
}