import { createContext, ReactNode, useState } from "react";

export const NotesContext = createContext<NotesContextType | null>(null)

type NotesContextType ={
    newNote: newNoteType;
    setNewNote: React.Dispatch<React.SetStateAction<newNoteType>>;
    handleTextAreaChange: React.ChangeEventHandler<HTMLTextAreaElement>;
    handleInputChange: React.ChangeEventHandler<HTMLInputElement>;
    handleRefresh: ()=> void;
}

type NotesContextProviderProps = {
    children: React.ReactNode
}

type newNoteType = {
    noteTitle: string;
    noteDescription: string
}

export const NotesContextProvider = ({ children }: NotesContextProviderProps) => {
    const [newNote, setNewNote] = useState<newNoteType>({
        noteTitle: '',
        noteDescription: ''
    })
    const handleTextAreaChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        const {name, value} = e.target;
        setNewNote(prev => {
            return({
                ...prev,
                [name]: value
            })
        })
    }
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        const {name, value} = e.target;
        setNewNote(prev => {
            return({
                ...prev,
                [name]: value
            })
        })
    }

    const handleRefresh = () => {
        setNewNote({
            noteTitle: '',
            noteDescription: ''
        })
    }
    return <NotesContext.Provider value = {{ newNote, setNewNote, handleTextAreaChange, handleInputChange, handleRefresh }}>{children}</NotesContext.Provider>
}

 