export interface ILoginRequest {
    username: string;
    password: string;
}

export interface ILoginResponce {
    token: string
}

export interface ILogoutResponce {
    isSuccess: boolean
}

// export interface IPost {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }
