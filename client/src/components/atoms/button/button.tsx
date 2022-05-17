import { IButtonProps } from "./types";
import './button.scss';

/**
 * Component for button
 * @param param0 
 * @returns 
 */
export const Button: React.FunctionComponent<IButtonProps> = ({
    id="",
    className="",
    onClick = () => {},
    style = {},
    children = null,
    type
}) => {
    return (
        <button 
            id={id} 
            className={`btn btn-${type} ${className}`} 
            onClick={onClick} 
            style={style}
        >
            {children}
        </button>
    )
}