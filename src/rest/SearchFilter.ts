/**
 * This enum contains supported SearchFilter operators.
 */
const enum Operator {
    LIKE = "LIKE", // case sensitive LIKE
    ILIKE = "ILIKE" // case insensitive LIKE
}
export {Operator};

/**
 * This interface represents a single Filter for Searching
 */
export default interface SearchFilter {
    field: string,
    operator: Operator,
    filterValue: any
}
