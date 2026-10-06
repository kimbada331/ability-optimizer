export type AbilityGrade =
  | 'rare'
  | 'epic'
  | 'unique'
  | 'legendary'

export interface AbilityLine {
  grade: AbilityGrade
  optionId: string
  value: number | null
}

export interface AbilityState {
  lines: [AbilityLine, AbilityLine, AbilityLine]
}

export type TargetGrade =
  | AbilityGrade
  | 'any'

export interface TargetCondition {
  grade: TargetGrade
  optionId: string | 'any'
  minValue: number | null
}