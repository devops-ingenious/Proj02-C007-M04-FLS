import './Frame.scss';

export default function Frame(props) {
    return (
        <div className='frame'>
            <img className='frame_image'
                src={props.image}
                alt={props.imageAlt}
            />
            <div className='frame_textLine'>
                <h2>{props.text}</h2>
            </div>
        </div>
    )
}