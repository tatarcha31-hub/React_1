import { useState } from "react";

const GetName = () => {
    const [name, setName] = useState("Ildar")
    return <div>
        <h1>{name}</h1>
        <button onClick={() => setName("Ildar Krasavchik")}>create name</button>
    </div>
}
export default GetName;