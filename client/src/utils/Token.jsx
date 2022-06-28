import jwt_decode from "jwt-decode";
import { cookies } from './Cookie';
let token;

if(cookies.get("token")) {
    token = jwt_decode(cookies.get("token"))
}

export default token;