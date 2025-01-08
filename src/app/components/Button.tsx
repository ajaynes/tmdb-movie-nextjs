type ButtonProps = {
    name: string;
    style?: string;
}

export default function Button({name, style}: ButtonProps) {
    // const basic = ""
    let buttonStyle;
    if (!style) {
        buttonStyle = 'btn btn-default';
    } else {
        buttonStyle = style;
    }
   return <button className={`btn ${buttonStyle}`}>{name}</button>
}
