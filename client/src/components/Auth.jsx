
import NotFound from "../pages/NotFound"
import jwt_decode from "jwt-decode";
import { cookies } from "../utils/Cookie";

const Auth = ({children}) => {
    return (
        <div>
            {
                (jwt_decode(cookies.get("token")).user_auth == "U")
                ? <NotFound />
                : <>{children}</>
            }
        </div>
    )
}

export default Auth;