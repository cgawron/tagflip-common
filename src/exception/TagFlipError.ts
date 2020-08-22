import TagFlipErrorCode from "./TagFlipErrorCode";


export default interface TagFlipError {
    name: string,
    statusCode: number,
    message: string,
    internalErrorCode?: TagFlipErrorCode
}
