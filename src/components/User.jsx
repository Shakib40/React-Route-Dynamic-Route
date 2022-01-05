import React from 'react';
import {Link} from 'react-router-dom';

export const Users = () => {
    const [users,setUsers] = React.useState([]);
    const [isLoading,setIsLoading] = React.useState(true);

    const fetchProducts = () =>{
        setIsLoading(true);
        fetch("http://localhost:3001/products")
        .then((response) =>{
            setUsers(response.data)
            setIsLoading(false);
        })
        .catch((error) =>{
            console.log("Error",error);
            setIsLoading(false);
        })

    }
    
    React.useEffect(() =>{
        fetchProducts()
    },[]);

    
    return(
        <>
        <div className="productList">
         {[1,2,3,4,5,6,7,8,9,10].map((e) =>
             <Link key={e.toString()} to={`/users/${e}`}>Users {e}</Link>
         )}
         </div>
        </>
    )
};
