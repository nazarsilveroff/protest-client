import { nanoid } from "nanoid"

export const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home",
        private: false
    },
    {
        id: nanoid(),
        to: "/contacts",
        text: "Contacts",
        private: true
    },
    {
        id: nanoid(),
        to: "/materials",
        text: "Materials",
        private: true
    }
]