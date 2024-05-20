import { useUsers } from "../hooks";
import { UserRow } from "./UserRow";

export const UsersPage = () => {

    const { users, nextPage, previewsPage } = useUsers();

    return (
        <>
            <h3>Users Page</h3>
            <table>
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user) => {
                            return (
                                <UserRow user={user} key={user.id} />
                            )
                        })
                    }
                </tbody>
            </table>

            <div>
                <button onClick={previewsPage} >Preview</button>
                &nbsp;
                <button onClick={nextPage} >Next</button>
            </div>
        </>
    );
}

