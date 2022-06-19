import { IBaseProps } from '../base/types';
import './svgThumbNail.scss';


export interface SvgThumbNail extends IBaseProps{
    src: string
    alt: string
}

export const SvgThumbNail: React.FunctionComponent<SvgThumbNail> = ({
    src,
    alt,
    className = ""
}) => {
    return (
        <div className={`thumbNailContainer ${className}`}>
            <img className='thumbNail' src={src} alt={alt}/>
        </div>
    )
}