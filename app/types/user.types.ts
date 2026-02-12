import { SubscriptionStatus, SubscriptionType, UserRole } from "./enums";

export interface UserProfile {
    id: number;
    name: string;
    email: string;
    username: string;
    picture: string;
    role: UserRole;
    instruments: any;
    contact: string;
    facebook: string;
    instagram: string;
    youtube: string;
    audiomack: string;
    tiktok: string;
    boomplay: string;
    applemusic: string;
    spotify: string;
    genre: string;
    bio: string;
    collaborations: any;
    awards: any;
    location: string;
    country: string;
    subscriptionType: SubscriptionType;
    subscriptionStatus: SubscriptionStatus;
    subscriptionExpiresAt: Date;
    creditBalance: number;
    createdAt: Date;
    updatedAt: Date;
}
