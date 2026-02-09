import { Providers } from "@/components/providers"
import { ReactNode } from "react"

const MainProjectLayout = ({ children }: {
    children: ReactNode
}) => {
    return (
        <Providers>
            {children}
        </Providers>
    )
}

export default MainProjectLayout