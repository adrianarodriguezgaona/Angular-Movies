export interface coordinatesMap {
    lat: number;
    lng: number;
}

export interface coordinatesMapWithMessage extends coordinatesMap{
    message: string;
}