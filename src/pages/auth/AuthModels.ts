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
    accessToken?: string,
    refreshToken?: string,
    success: boolean,
    isAdmin: boolean
}


export interface DecodedToken {
    sub: string;         // ID del usuario
    role: string;        // El rol del usuario
    exp: Date;         // Tiempo de expiración
    jti: string;         // ID único del token
  }

  export interface AuthResponse {
    token: string;
}

export interface Claim{
    name: string;
    value: string;
}