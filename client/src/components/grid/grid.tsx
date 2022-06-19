import React from 'react';
import { GResponsiveProps, IContainerProps, IGridProps } from './types';
import './grid.scss';


export const Container: React.FunctionComponent<IContainerProps> = ({
    id = undefined,
    className = undefined,
    onClick = () => { },
    style = {},
    children,
    fluid
}) => {
    return (
        <div
            id={id}
            className={`container ${className ?? ""} ${fluid ? 'container-fluid' : ''}`}
            style={style}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

const defaultGap: GResponsiveProps = {
    size: 12,
    gap: 8
}

export const Grid: React.FunctionComponent<IGridProps> = ({
    id = "",
    className = "",
    onClick = () => { },
    style = {},
    children,
    XS = defaultGap,
    S = null,
    M = null,
    L = null,
    XL = null,
    XXL = null
}) => {

    // Using object for passing class name as ref
    let resultClassName: { className: string } = { className: `${className} grid` };

    const addGridPropsToClass = (responsiveProps: GResponsiveProps | null, inpuGSize: string, inpuCls: { className: string }) => {
        if (responsiveProps == null) {
            return;
        }

        const gSize = `grid-size-${inpuGSize}-${responsiveProps.size}`;
        const gGap = `grid-gap-${inpuGSize}-${responsiveProps.gap}`;

        inpuCls.className += ` ${gSize} ${gGap}`
    }

    addGridPropsToClass(XS, Object.keys({ XS })[0], resultClassName);
    addGridPropsToClass(S, Object.keys({ S })[0], resultClassName);
    addGridPropsToClass(M, Object.keys({ M })[0], resultClassName);
    addGridPropsToClass(L, Object.keys({ XL })[0], resultClassName);
    addGridPropsToClass(XXL, Object.keys({ XXL })[0], resultClassName);

    return (
        <div 
            id={id} 
            className={resultClassName.className} 
            style={style} 
            onClick={onClick}
        >
            {children}
        </div>
    )
}