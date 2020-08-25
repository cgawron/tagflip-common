/**
 * This enum contains supported SearchFilter operators.
 */
const enum Operator {
    STARTS_WITH, // LIKE 'x%'
    SUBSTRING // LIKE '%x%'
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
