'use client'
import { CustomButtonProps } from "@/types"
import Image from "next/image"

const CustomButton = ({ title, containerStyles,
    handelClick, btnType, textStyle, rightIcon }: CustomButtonProps) => {
    return (
        <button
            disabled={false}
            type={btnType || "button"}
            className={`custom-btn ${containerStyles}`}
            onClick={handelClick}
        >
            <span className={`flex-1 ${textStyle}`}>
                {title}
            </span>
            {rightIcon && (
                <div className="relative w-6 h-6">
                    <Image
                        src={rightIcon}
                        alt="righ icon"
                        fill
                        className="object-containe"
                    />
                    
                </div>
                
            )}
        </button>
    )
}

export default CustomButton