import { useAccounts } from '#/api/useAccounts'
import type { Account } from '#/models/accounts'
import { createFileRoute } from '@tanstack/react-router'
import { AccountNode } from '../components/AccountNode'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const { data, isLoading, error } = useAccounts()

  if (isLoading) return <p>Laddar...</p>
  if (error) return <p>Fel vid hämtning</p>

  const rootAccounts =
    data?.filter((account: Account) => account.parent_id === null) || []

  return (
    <div className="p-8 flex flex-col gap-4 max-w-150 mx-auto">
      <h1 className="text-2xl font-bold">Accounts</h1>
      <p>
        Total balance:
        <span>
          {data
            ?.reduce(
              (sum: number, account: Account) => sum + account.balance,
              0,
            )
            .toLocaleString()}{' '}
          kr
        </span>
      </p>
      {rootAccounts.map((account: Account) => (
        <AccountNode
          key={account.id}
          account={account}
          allAccounts={data || []}
          depth={0}
        />
      ))}
    </div>
  )
}
