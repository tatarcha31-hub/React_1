const Card = () => {
    const getClick = () => {
        console.log("Кнопка нажата")
    }
    return <div>
        <h1>Components 1: Hello world</h1>
        <button onClick={getClick}>click</button>
    </div>
}
export default Card;