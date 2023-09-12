import { create } from "zustand";
import { Response } from "@/types/data";


interface PromptStore {
    id: string,
    setId: (id: string) => void,
    prompt: string,
    setPrompt: (prompt: string) => void,
    negativePrompt: string,
    setNegativePrompt: (prompt: string) => void,
    width: number,
    setWidth: (width: number) => void,
    height: number,
    setHeight: (height: number) => void,
    responseData: Response[] | null,
    setResponseData: (responseData: Response[] | null) => void,
}

const usePromptStore = create<PromptStore>((set) => ({
    id: "",
    setId: (id: string) => set({ id }),
    prompt: "",
    setPrompt: (prompt: string) => set({ prompt }),
    negativePrompt: "",
    setNegativePrompt: (negativePrompt: string) => set({ negativePrompt }),
    width: 1024,
    setWidth: (width: number) => set({ width }),
    height: 1024,
    setHeight: (height: number) => set({ height }),
    responseData: null,
    setResponseData: (responseData) => set({ responseData }),
}));

export default usePromptStore;