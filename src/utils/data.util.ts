import axios from "axios"

export const getData = async <T>(url: string): Promise<T> => {
    return await axios(url)
        
}