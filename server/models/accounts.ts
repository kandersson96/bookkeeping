export interface CreateAccount {
    "name": string,
    "parent_id": string | null,
}

export interface UpdateAccountBalance {
    "delta": number
}