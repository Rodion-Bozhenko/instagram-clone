export interface IUser {
    username: string
    fullName: string
    emailAddress: string
    following: string[]
    followers: string[]
    dateCreated: number
    userId: string
    docId: string
}

export interface Comments {
    comment: string
    displayName: string
}

export interface IPhoto {
    caption: string
    comments: Comments[]
    dateCreated: number
    imageSrc: string
    likes: string[]
    photoId: number
    userId: string
    userLatitude: string
    userLongitude: string
    docId: string
    username: string
    userLikedPhoto: boolean
}
