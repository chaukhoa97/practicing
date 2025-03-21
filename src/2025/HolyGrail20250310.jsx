import s from './a.module.css'

export default function HolyGrail20250310() {
  return (
    <div className={s.container}>
      <header className={s.header}>Header</header>
      <div className={s.mainContent}>
        <nav className={s.nav}>
          Navigation Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Quam illum quo eos amet veniam eum nisi suscipit quaerat, iste
          asperiores eaque ullam, libero, magnam voluptatum? Voluptates quaerat
          impedit repellendus amet, soluta odio officiis, ipsam, recusandae
          consequatur laboriosam veritatis adipisci maxime fugiat pariatur magni
          sit. Quia, neque. Aspernatur suscipit hic saepe?
        </nav>
        <main className={s.main}>Main</main>
        <aside className={s.aside}>Sidebar</aside>
      </div>
      <footer className={s.footer}>Footer</footer>
    </div>
  )
}
