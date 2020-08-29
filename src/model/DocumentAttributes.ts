
export default interface DocumentAttributes {

    documentId: number

    corpusId: number;

    filename: string;

    documentHash: string;

    content?: string;

    createdAt?: Date

    updatedAt?: Date
}
