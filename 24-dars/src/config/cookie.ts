import Cookies from "js-cookie";

export function loadCookieState(key: string) {
    try {
        const serializedState = Cookies.get(key);
        return serializedState
            ? serializedState.replace(/^"|"$/g, "")
            : undefined;
    } catch (e) {
        return undefined;
    }
}

export function saveCookieState(key: string, state: any, minutes: number = 60) {
    try {
        const serializedState = JSON.stringify(state);
        Cookies.set(key, serializedState, {
            expires: minutes / 1440,
            secure: true,
            sameSite: "Strict",
        });
    } catch (e) {}
}

export function removeCookieState(key: string) {
    try {
        Cookies.remove(key);
    } catch (e) {}
}
