import { IBaseProps } from "../base/types";

export type BTNType = "primary" | "secondary" | "success" | "link"

export interface IButtonProps extends IBaseProps {
    type: BTNType
}