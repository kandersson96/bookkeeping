import type { PatchBalanceInput } from "../models/accounts"

const baseApiUrl = 'http://localhost:3001'

export async function getAccounts() {
    const res = await fetch(`${baseApiUrl}/accounts`)
    return res.json()
}

export async function patchAccountBalance({ accountId, delta }: PatchBalanceInput) {
    const res = await fetch(`${baseApiUrl}/accounts/${accountId}/balance`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ delta })
    })
    return res.json()
}