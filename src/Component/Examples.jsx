
import { useMemo, useState } from "react";

const Examples = () => {
    const [count, SetCount] = useState(0);
    const [title, setTitle] = useState("Use Memo hook")

    const calculateSquare = () => {
        console.log('calculation begins')
        return count * count;
    }

    // const squareValue = calculateSquare();

    const squareValuememo = useMemo(() => {
        return calculateSquare();
    }, [count])

    const increment = () => {
        SetCount(count + 1);
    }

    return (
        <div className="card">
            <h1>{title}</h1>
            <br></br>
            <input onChange={(e) => setTitle(e.target.value)} className="form-control"></input>
            <br></br>
            <h2>Square value is : {squareValuememo}</h2>
            <br></br>
            <button style={{ "width": "100px" }} onClick={increment} className="btn btn-primary">+</button>
        </div>
    );
}

export default Examples;