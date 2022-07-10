import { useState } from "react"

export default () => {
    // const [count, setCount] = useState<number>(0)
    const [count, setCount] = useState<number>(() => 0)

    // Race Condition  竞争条件?

    // setCount(count + 1)
    // setCount(_count => _count  + 1)
    return <div>
        { count }
        <button onClick={ () => setCount(_count => _count  + 1) }>counter</button>
    </div>
}