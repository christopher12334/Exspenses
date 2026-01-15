import './card.css'

const Card = (props) => {

    const classes = `card ${props.className || ''}`.trim()

    return(
        <div className={classes}>
            {props.children}
        </div>
    )
}

export default Card