import { ReactNode } from 'react'

type Props = {
    children: ReactNode
    show: boolean
}

export const Section = (props: Props) => {
    return (
        <div className='section'
            style={{ opacity: 1, display: props.show ? "block" : "none" }}>
            {props.children}
        </div>
    )
}