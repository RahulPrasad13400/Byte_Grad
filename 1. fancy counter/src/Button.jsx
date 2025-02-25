export default function Button({children, count, onClick}) {
  return (
    <button disabled={count>4} className="count-btn" onClick={onClick}>
        {children}
    </button>  

  )
}
