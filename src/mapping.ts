import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  AuctionBid as AuctionBidEvent,
  AuctionCreated as AuctionCreatedEvent,
  AuctionSettled as AuctionSettledEvent,
  MinBidIncrementPercentageUpdated as MinBidIncrementPercentageUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ReservePriceUpdated as ReservePriceUpdatedEvent,
  Transfer as TransferEvent
} from "../generated/SkateContract/SkateContract"
import {
  Approval,
  ApprovalForAll,
  AuctionBid,
  AuctionCreated,
  AuctionSettled,
  MinBidIncrementPercentageUpdated,
  OwnershipTransferred,
  ReservePriceUpdated,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleAuctionBid(event: AuctionBidEvent): void {
  let entity = new AuctionBid(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.gnarId = event.params.gnarId
  entity.sender = event.params.sender
  entity.value = event.params.value
  entity.timestamp = event.params.timestamp
  entity.save()
}

export function handleAuctionCreated(event: AuctionCreatedEvent): void {
  let entity = new AuctionCreated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.gnarId = event.params.gnarId
  entity.save()
}

export function handleAuctionSettled(event: AuctionSettledEvent): void {
  let entity = new AuctionSettled(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.gnarId = event.params.gnarId
  entity.winner = event.params.winner
  entity.amount = event.params.amount
  entity.timestamp = event.params.timestamp
  entity.save()
}

export function handleMinBidIncrementPercentageUpdated(
  event: MinBidIncrementPercentageUpdatedEvent
): void {
  let entity = new MinBidIncrementPercentageUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.percent = event.params.percent
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleReservePriceUpdated(
  event: ReservePriceUpdatedEvent
): void {
  let entity = new ReservePriceUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.price = event.params.price
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}
