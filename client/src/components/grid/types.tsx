import { IBaseProps } from "../base/types";

export type GapSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type GridSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export type GResponsiveProps = {
    size: GridSize
    gap: GapSize
}

export interface IGridProps extends IBaseProps {
    XS?: GResponsiveProps
    S?: GResponsiveProps,
    M?: GResponsiveProps,
    L?: GResponsiveProps,
    XL?: GResponsiveProps,
    XXL?: GResponsiveProps,
}

export interface IContainerProps extends IBaseProps {
    fluid: boolean
}