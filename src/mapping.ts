import {
  Deposit as DepositEvent,
  Withdraw as WithdrawEvent
} from "../generated/ETHPool/ETHPool"
import { Deposit, Withdraw } from "../generated/schema"

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.save()
}

export function handleWithdraw(event: WithdrawEvent): void {
  let entity = new Withdraw(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.user = event.params.user
  entity.amount = event.params.amount
  entity.save()
}
