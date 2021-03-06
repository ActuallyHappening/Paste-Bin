export type T_HelperOptions = {
  children?: React.ReactNode
  expand?: boolean
  max_content?: boolean
  no_overflow?: boolean
}

const HelperGen = (className: string) => ({children, expand, max_content, no_overflow, ...rawAttributes}: T_HelperOptions & React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${className}${expand ? " Mixin-expand" : ""}${max_content ? " Mixin-max-content" : ""}${no_overflow ? " Mixin-no-overflow" : ""}`} {...rawAttributes}>
      {children}
    </div>
  )
}

export const HorizontalDivider = HelperGen("HorizontalDivider")
export const VerticalDivider = HelperGen("VerticalDivider")
export const Helper = HelperGen("Helper")