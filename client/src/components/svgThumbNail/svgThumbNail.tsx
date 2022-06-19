import { IBaseProps } from '../base/types';
import './svgThumbNail.scss';


export interface SvgThumbNail extends IBaseProps{
    src: string
    alt: string
}

export const SvgThumbNail: React.FunctionComponent<SvgThumbNail> = ({
    src,
    alt
}) => {
    return (
        <div className='thumbNailContainer'>
            <img className='thumbNail' src={src} alt={alt}/>
        </div>
    )
}