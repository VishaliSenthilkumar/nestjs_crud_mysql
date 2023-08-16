import { Profile } from "./profile.entity";
import { Post } from "./post.entity";
export declare class User {
    id: number;
    username: String;
    password: string;
    createdAt: Date;
    authStrategy: string;
    profile: Profile;
    posts: Post[];
}
