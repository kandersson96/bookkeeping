export interface Account {
  id: string
  name: string
  balance: number
  parent_id: string | null
}

export interface PatchBalanceInput {
  accountId: string
  delta: number
}
