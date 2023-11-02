import {makeAutoObservable, runInAction} from "mobx";
import AuthService from "./AuthService";

export default class AuthStore {
    loader: boolean = false;
    token: any;

    private authService: AuthService;

    constructor() {
        makeAutoObservable(this);
        this.authService = new AuthService()
    }

    login = async (data:any) => {
        this.setLoading(true);
        console.log(data,12121)
        try {
            const res = this.authService.login(data);
            runInAction(() => {
                // this.token = res
            })
        } catch (e) {
            console.log('ERR', e)
        } finally {
            this.setLoading(false)
        }
    };

    setLoading = (value: boolean) => {
        runInAction(() => {
            this.loader = value
        })
}
}
