import { useParams } from "react-router-dom";
export const  UserDetails = () => {
    const {usersId} = useParams();

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>User ID</th>
                        <th>User Name</th>
                        <th>User Age</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>{usersId}</td>
                        {/* <td>{products.Name}</td>
                        <td>{products.Price}</td> */}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}