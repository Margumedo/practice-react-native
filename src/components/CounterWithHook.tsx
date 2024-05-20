import { useCounter } from "../hooks/useCounter"


export function CounterWithHook() {

    const { count, increseBy } = useCounter({
        intialValue: 7
    });

    return (
        <div>
            <h2>Counter: <small>{count}</small></h2>
            <div>
                <button onClick={() => increseBy(+1)} >+1</button>
                &nbsp;
                <button onClick={() => increseBy(-1)} >-1</button>
            </div>

        </div>
    )
}