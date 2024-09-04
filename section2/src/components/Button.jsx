const Button = ({text, color, children}) => {

    const onClickButton = () => {
        console.log(text)
    }

        return(
            <button
            // 이벤트 핸들러 
            onClick={onClickButton}
            onMouseEnter={onClickButton}
            
            
            style={{color:color}}>
            
            {text} - {color}
            {children}
            </button>

            
        )
}
//props의 드폴트값
Button.defaultProps = {
    color:"black"
}
export default Button;
