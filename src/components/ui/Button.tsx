import { BaseComponentType } from "@/models"

export const Button: BaseComponentType = ({ children, className }) => {
    return (
        <button
            className={
                [
                    'border border-neutral-800 rounded-sm p-1 hover:bg-neutral-800 hover:border-neutral-700 text-base',
                    className
                ].join('')
            }
        >
            {children}
        </button>
    )
}
