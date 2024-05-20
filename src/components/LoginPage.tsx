import { useEffect } from "react";
import { useAuthStore } from "../store/auth.store";

export const LoginPage = () => {
    const authStatus = useAuthStore((state) => state.status);
    const login = useAuthStore((state) => state.login);
    const logout = useAuthStore((state) => state.logout);
    const user = useAuthStore((state) => state.user);

    useEffect(() => {
        setTimeout(() => {
            logout();
        }, 1500);
    }, []);

    if (authStatus == "checking") {
        return <h3>Cargando...</h3>;
    }

    return (
        <>
            <h3>Login Page</h3>
            {authStatus === "authenticated" ? (
                <small> Inicio session como: {JSON.stringify(user, null, 2)}</small>
            ) : (
                <small>No Authenticado</small>
            )}
            &nbsp;
            {authStatus === "authenticated" ? (
                <button onClick={logout}>Logout</button>
            ) : (
                <button onClick={() => login("JJ@gmail.com", "test123")}>Login</button>
            )}
        </>
    );
};
