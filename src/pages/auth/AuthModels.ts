export interface RegisterUser{
    username: string,
    email: string,
    password: string,
}

export interface LoginUser{
    email:string,
    password:string,
}

export interface LoginUserResponse{
    jwt?: string,
    isAdmin?: boolean,
    success: boolean
}