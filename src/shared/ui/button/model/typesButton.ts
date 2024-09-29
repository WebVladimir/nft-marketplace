type ButtonSizeType = 'primary' | 'secondary' | 'tertiary'
type ButtonTypeType = 'fill' | 'border'
type ButtonPaddingType = 50 | 30
type ButtonColorType = 'purple' | 'white'

export interface ButtonProps {
  size?: ButtonSizeType
  type?: ButtonTypeType
  padding?: ButtonPaddingType
  color?: ButtonColorType
  reverse?: boolean
  is?: string
  link?: boolean
}