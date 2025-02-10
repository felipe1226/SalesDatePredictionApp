export interface JsonResponseDTO<T> {
    success: boolean;
    error: string;
    message: string;
    data: T;
}