import exp from "constants";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handelClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyle?: string;
    rightIcon?: string;
    isDisabled?: boolean
}

export interface serchManuFacturerProps {
    manufacturer: string;
    setManufacturer: (manufacturer: string) => void
}


export interface carProps {
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;

}



