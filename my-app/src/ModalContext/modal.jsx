


import { createContext,useDisclosure } from "react";


export const ModalContext=createContext()


function MContextProvider({children}){
    const { isOpen, onOpen, onClose } = useDisclosure()

    const value={isOpen,onOpen,onClose}

    return (
       
        <ModalContext.Provider value={value}>
{children}
        </ModalContext.Provider>
    )
}

export default MContextProvider