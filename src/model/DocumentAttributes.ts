
export default interface DocumentAttributes {

    documentId: number

    filename: string;

    documentHash: string;

    content?: string;

    // tags: Tag[];

    corpusId: number;

    // corpus!: Corpus;

    createdAt?: Date

    updatedAt?: Date
}
