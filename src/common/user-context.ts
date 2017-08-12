import * as appContext from './app-context';

let value: UserContextModel;

export type UserContextModel = {
    userName: string    
}

export let set = (value: UserContextModel) => {
    appContext.add("UserContext", value, appContext.ScopeType.requestLifeCicle);
};

export let get = (): UserContextModel => {
    return <UserContextModel>appContext.get("UserContext");
};

export let remove = () => {
    appContext.remove("UserContext");
};