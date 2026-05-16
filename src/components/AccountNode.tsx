import type { Account } from '#/models/accounts'
import { useState } from 'react'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible'

type Props = {
  account: Account
  allAccounts: Account[]
  depth: number
}

export function AccountNode({ account, allAccounts, depth }: Props) {
  const [open, setOpen] = useState<string | null>(null)
  const children = allAccounts.filter((a) => a.parent_id === account.id)
  const hasChildren = children.length > 0

  return (
    <Collapsible
      key={account.id}
      open={open === account.id}
      onOpenChange={(isOpen) => setOpen(isOpen ? account.id : null)}
    >
      <CollapsibleTrigger
        className={`text-lg font-medium text-white w-full text-left bg-neutral-600 px-4 py-2 rounded-md`}
        style={{
          marginLeft: `${depth * 16}px`,
          width: `calc(100% - ${depth * 16}px)`,
        }}
      >
        <div className="flex justify-between gap-4">
          <span>{account.name}</span>
          <span className="ml-auto">{account.balance.toLocaleString()} kr</span>
          {hasChildren && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              width="24"
              className={open === account.id ? 'rotate-180' : ''}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          )}
        </div>
      </CollapsibleTrigger>
      <CollapsibleContent className="mt-2 flex flex-col gap-2">
        {children.map((child) => (
          <AccountNode
            key={child.id}
            account={child}
            allAccounts={allAccounts}
            depth={depth + 1}
          />
        ))}
      </CollapsibleContent>
    </Collapsible>
  )
}
