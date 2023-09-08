export default function Form({children, className, ...rest}) {
  return (
    <div className={`flex column ${className}`} {...rest}>
      {children}
    </div>
  )
}