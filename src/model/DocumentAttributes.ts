import {AnnotationTaskDocumentAttributes} from "../../index";

export default interface DocumentAttributes {

    documentId: number

    corpusId: number;

    filename: string;

    documentHash: string;

    content?: string;

    annotationTaskDocuments?: AnnotationTaskDocumentAttributes[]

    createdAt?: Date

    updatedAt?: Date
}
