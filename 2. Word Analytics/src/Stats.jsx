export default function Stats({numOfCharacters = 0, numOfWords = 0}) {
  return (
    <section className="stats">
      <Stat label="Words"  number={numOfWords-1} />
      <Stat label="Characters" number={numOfCharacters} />
      <Stat label="Instagram" number={280-numOfCharacters} warning={280-numOfCharacters > 0 ? '' : 'stat__number--limit'} />
      <Stat label="Facebook" number={2200-numOfCharacters} warning={2200-numOfCharacters > 0 ? '' : 'stat__number--limit'} />
    </section>
  )
}

function Stat({label, number, warning}){
  return <section className="stat">
  <span className={`stat__number ${warning ? warning : ''}`}>{number}</span>
  <h2 className="second-heading">{label}</h2>
</section>
}