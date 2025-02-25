export default function Title({count}) {
  return (
    <h1 className="title">
      {count > 4 ? <span>Limit! Buy <b>Pro</b> For &gt;5</span> : "Fancy Counter"}
    </h1>
  )
}
