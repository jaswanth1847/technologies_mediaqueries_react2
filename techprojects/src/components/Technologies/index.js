import "./index.css"
let Technologies = (props) =>{
    let {card} = props 
    let{title,description,imgUrl,className} = card
    return(<li className={`${className} card`}>
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="imgg"><img src={imgUrl} alt={className}/></div>
    </li>)
}

export default Technologies