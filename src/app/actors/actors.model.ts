export interface actorCreationDto{
    name: string;
    dateOfBirth: Date;
    picture: File;
    biography: string;
}

//DTO for reading an actor
export interface actorDto{
    name: string;
    dateOfBirth: Date;
    picture: string;
    biography: string;
}