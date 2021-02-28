export type Post = {
    date: Date;
    text: string;
    user?: User;
}

export type User = {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    avatar: string;
    posts?: Post[];
    following?: User[];
}

export interface UserLogin {
    email: string,
    password: string
}
