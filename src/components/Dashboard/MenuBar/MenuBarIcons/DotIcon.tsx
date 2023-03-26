type DotIconProps = {
  color: string
}

export const DotIcon = ({color}: DotIconProps) => (
    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="4" height="4" rx="2" fill={color}/>
    </svg>
)