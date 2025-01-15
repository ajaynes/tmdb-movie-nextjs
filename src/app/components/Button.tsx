type ButtonProps = {
    name: string;
    classStyles?: string;
    style?: string;
    onClick: () => void;
}

export default function Button({name, classStyles, onClick}: ButtonProps) {
    let buttonStyle;
    if (!classStyles) {
        buttonStyle = 'btn btn-default';
    } else {
        buttonStyle = classStyles;
    }
   return <button className={`btn ${buttonStyle}`} onClick={onClick}>{name}</button>
}
