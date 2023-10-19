// https://www.greatfrontend.com/questions/user-interface/holy-grail

export default function HolyGrail() {
  // Flexbox
  return (
    <div className="flex h-screen flex-col text-center text-xl font-bold">
      <header className="basis-[60px] bg-red-500">Header</header>
      <div className="flex flex-auto">
        <nav className="basis-[100px] bg-yellow-500">Navigation</nav>
        <main className="grow bg-green-500">Main</main>
        <aside className="basis-[100px] bg-blue-500">Sidebar</aside>
      </div>
      <footer className="w-full basis-[100px] bg-gray-500">Footer</footer>
    </div>
  )
  // Alternative no Flexbox
  // return (
  //   <div className="text-center text-xl font-bold">
  //     <header className="h-[60px] bg-red-500">Header</header>
  //     <div className="flex h-[calc(100vh_-_160px)]">
  //       <nav className="w-[100px] bg-yellow-500">Navigation</nav>
  //       <main className="flex-auto bg-green-500">Main</main>
  //       <aside className="w-[100px] bg-blue-500">Sidebar</aside>
  //     </div>
  //     <footer className="fixed bottom-0 h-[100px] w-full bg-gray-500">
  //       Footer
  //     </footer>
  //   </div>
  // )
}
