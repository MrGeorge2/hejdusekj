export interface IBaseProps {
    id?: string,
    className?: string,
    onClick?: () => void,
    style?: React.CSSProperties,
    children?: React.ReactElement
}