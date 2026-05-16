import express, { type Response, type Request } from 'express'
import { accounts } from '../db/memory'
import type { CreateAccount, UpdateAccountBalance } from '../models/accounts'

const accountsRouter = express.Router()

function propagateBalanceUpwards(accountId: string, delta: number) {
    const account = accounts.find(account => account.id === accountId)
    if (account) {
        account.balance += delta
        if (account.parent_id) {
            propagateBalanceUpwards(account.parent_id, delta)
        }
    }
}

accountsRouter.get('/', (req: Request, res: Response) => {
    res.json(accounts)
})

accountsRouter.post('/', (req: Request, res: Response) => {
    const { name, parent_id } = req.body as CreateAccount

    const newAccount = {
        id: crypto.randomUUID(),
        name,
        parent_id,
        balance: 0
    }

    accounts.push((newAccount))
    res.json(newAccount)
})


accountsRouter.patch('/:id/balance', (req: Request, res: Response) => {
    const { id } = req.params
    const { delta } = req.body as UpdateAccountBalance

    const account = accounts.find(account => account.id === id)
    if (!account) {
        return res.status(404).json({ error: 'Account not found' })
    }

    propagateBalanceUpwards(account.id, delta)

    return res.json(account)
})

export default accountsRouter