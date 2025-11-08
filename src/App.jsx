import Header from "./components/Header"
import MainContent from "./components/MainContent"
import data from "./data"
export default function App(){
  const entryElements = data.map((entry)=>{
    return (
      <MainContent 
          key = {entry.id} // react keeps track of adding and removing...so if it has one or more same it gives an error
          img = {entry.img}
          title = {entry.title}
          country = {entry.country}
          googleMapsLink={entry.googleMapsLink}
          dates = {entry.dates}
          text = {entry.text}
      />
  )
  })
  return (
    <>
      <Header />
      <main className="container">
        {entryElements}
      </main>
    </>
  )
}
