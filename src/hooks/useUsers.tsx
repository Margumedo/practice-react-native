import { useEffect, useState, useRef } from "react";
import axios from "axios";
import type { ReqResUserListResponse, User } from "../interfaces";




const loadUsers = async (page = 1) => {

    try {
        const { data } = await axios.get<ReqResUserListResponse>('https://reqres.in/api/users', {
            params: {
                page: page
            }
        })
        return data.data

    } catch (error) {
        console.log(error)
        return [];
    }

}

export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([])
    const currentPageRef = useRef(1);

    const nextPage = async () => {
        currentPageRef.current++
        const users = await loadUsers(currentPageRef.current)

        if (users.length > 0) {
            setUsers(users);
            console.log(currentPageRef.current)
        } else {
            currentPageRef.current--;
            console.log(currentPageRef.current)

        }
    }
    const previewsPage = async () => {
        if (currentPageRef.current <= 1) return;
        currentPageRef.current--;
        const users = await loadUsers(currentPageRef.current);
        setUsers(users)
        console.log(currentPageRef.current)
    }

    useEffect(() => {
        loadUsers().then(users => setUsers(users))
    }, [])

    return {
        //properties
        users,

        //methods
        nextPage,
        previewsPage
    }

}