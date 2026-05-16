import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { getAccounts, patchAccountBalance } from "./accounts"
import type { PatchBalanceInput } from "#/models/accounts"


export function useAccounts() {
    return useQuery({
        queryKey: ['accounts'],
        queryFn: getAccounts
    })
}

export function usePatchAccountBalance() {
    const queryClient = useQueryClient()

    return useMutation<any, Error, PatchBalanceInput>({
        mutationFn: patchAccountBalance,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['accounts'] })
        }
    })
}