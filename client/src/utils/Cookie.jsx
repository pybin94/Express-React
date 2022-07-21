import Cookies from 'universal-cookie';
import jwt_decode from "jwt-decode";

export const cookies = new Cookies();
export const setCookie = (token) => {
    cookies.set('token', token, { sameSite: 'strict' });
}

export const removeCookie = () => {
    window.localStorage.setItem('logout', Date.now());
    cookies.remove('token');
}


// export let tokens;
// export let decodeTokens;
// if (cookies.get("token") !== undefined){
//     tokens = cookies.get("token")
//     decodeTokens = jwt_decode(cookies.get("token"))
// } else {
//     tokens = undefined;
//     decodeTokens = undefined;
// }



// token = cookies.get("token")

// import jwt_decode from "jwt-decode";
// decodeTokens = jwt_decode(cookies.get("token"))