

const Props = (props) => {
    const getText = () => {
        console.log("Ildar");
    } 
    return <div>
        <h1>Components 3: {props.name}</h1>
        <button onClick={getText}>click</button>
    </div>
}
export default Props;