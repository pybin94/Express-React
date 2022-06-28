import Cookies from 'universal-cookie';

export const cookies = new Cookies();
export const setCookie = (token) => {
    cookies.set('token', token, { sameSite: 'strict' });
}

export const removeCookie = () => {
    window.localStorage.setItem('logout', Date.now());
    cookies.remove('token');
    window.location.reload()
}