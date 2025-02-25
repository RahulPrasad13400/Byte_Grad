import BackgroundImage from "./BackgroundImage";

export default function Header() {
  return (
    <header className="first-heading">
      <BackgroundImage />
      <h1>Word <span className="first-heading--thin">Analytics</span></h1>
    </header>
  )
}
