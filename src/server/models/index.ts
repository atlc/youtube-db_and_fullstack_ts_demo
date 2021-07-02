export interface Item {
    id: string;
    content: string;
    is_finished: number;
    created_at: string;
}

export interface MySQL_Response {
    affectedRows: number,
    insertId: number,
    sqlMessage: string
}