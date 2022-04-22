export type GenericQueryPin = {
  type: "generic"
  disabled?: boolean
  value: string
  label?: string
}

export type FromQueryPin = {
  type: "from"
  disabled?: boolean
  value: string
}

export type TimeRangeQueryPin = {
  type: "time-range"
  disabled?: boolean
  from: Date
  to: Date
}

export type QueryPin = GenericQueryPin | FromQueryPin | TimeRangeQueryPin
