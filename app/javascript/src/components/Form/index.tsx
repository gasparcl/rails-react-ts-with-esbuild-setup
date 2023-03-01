import { FormControl, FormHelperText } from "@mui/material"
import { ReactNode } from "react"

import * as C from "./styles"

interface FormProps {
    onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
    children: ReactNode[] | ReactNode
    actions: ReactNode
    id: string
}

export function Form({ onSubmit, children, actions, id, ...props }: FormProps) {
    const hasMultipleChild = [children].length > 1

    return (
        <C.Form
            id={id}
            onSubmit={onSubmit}
            action="https://formsubmit.co/peritapatricia@outlook.com"
            method="POST"
            {...props}
        >
            {hasMultipleChild ? (
                [children].map((child: ReactNode, i: number) => (
                    <FormControl key={i}>{child}</FormControl>
                ))
            ) : (
                <FormControl>{children}</FormControl>
            )}
            {actions}
        </C.Form>
    )
}
