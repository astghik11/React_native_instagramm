import AuthApi from './AuthApi';
import {ILoginRequest, ILoginResponce, ILogoutResponce} from "./AuthTypes";

export default class AuthService {
    authApi: AuthApi;

    constructor() {
        this.authApi = new AuthApi();
    }

    login = async (dataLogin: ILoginRequest): Promise<ILoginResponce> => {
        const {data} = await this.authApi.login(dataLogin);

        return data;
    };

    logout = async (): Promise<ILogoutResponce> => {
        const {data} = await this.authApi.logout();
        return data;
    };

    // getPosts = async (): Promise<IPost[]> => {
    //   const {data} = await this.authApi.getPosts();
    //   return data;
    // };
}
