import {DocumentAttributes} from "../../index";

const enum DocumentAnnotationState {
    open = "open",
    inprogress = "inprogress",
    done = "done"
}

export {DocumentAnnotationState};

/**
 * Attributes of an annotation task document.
 * An *annotation task document* is a document that is being annotated during an annotation task.
 */
export default interface AnnotationTaskDocumentAttributes {

    /** uniquely identifies an annotation task document */
    annotationTaskDocumentId: number;

    /** identifier of the related annotation task **/
    annotationTaskId: number;

    /** identifier of the related document **/
    documentId: number

    /** current state of annotation of the document **/
    state: DocumentAnnotationState;

    /** Date of creation */
    createdAt: Date

    /** Date of the last update */
    updatedAt: Date

    /** related document **/
    document: DocumentAttributes

}
