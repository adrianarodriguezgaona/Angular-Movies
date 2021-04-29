export interface actorCreationDto{
    name: string;
    dateOfBirth: Date;
    picture: File;
}

//DTO for reading an actor
export interface actorDto{
    name: string;
    dateOfBirth: Date;
    picture: string;
}