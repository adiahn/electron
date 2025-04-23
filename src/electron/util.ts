export function isDev(): boolean {
    return process.env.NODE.ENV === 'development';
}