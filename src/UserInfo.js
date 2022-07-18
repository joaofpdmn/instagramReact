export default function UserInfo(props){
    return (
        <><img src={props.img} /><div class="texto">
            <strong>{props.name}</strong>
            {props.subname}
        </div></>
    );
}

