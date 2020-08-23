
/** Error codes used by the backend */
const enum TagFlipErrorCode {
    /** There is already a annotation set with this name */
    ANNOTATION_SET_NAME_ALREADY_TAKEN = 1000,

    /** There is already an annotation with this name */
    ANNOTATION_NAME_ALREADY_TAKEN = 2000,

    /** There is already a ducument with the same content in this corpus */
    CORPUS_DOCUMENT_SAME_CONTENT_FOUND = 3000
}

export default TagFlipErrorCode;

