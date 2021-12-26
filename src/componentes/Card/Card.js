import './Card.scss';
import { useNavigate } from 'react-router-dom';

export default function Card(props) {

    const exibeAssistir = props.exibeAssistir ?? true;

    const navigate = useNavigate();
    const vaParaFilme = () => {
        navigate(`/filme/${props.id}`, { state: props.id })
    }

    const handleWatch = (event) => {
        event.stopPropagation();
        props.onWatchClick(props.id);
    }

    return (
        <div className='card' onClick={vaParaFilme}>
            <img src={props.image} alt={props.name} />
            {/* <span>{props.name}</span> */}
            {exibeAssistir && (
                <span onClick={handleWatch}>Marcar como assistido</span>
            )}
        </div>
    )
}