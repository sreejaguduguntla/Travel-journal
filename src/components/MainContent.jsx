export default function MainContent(props){
  return(
    <article className="journal-entry">
      <div className="main-image-container">
        <img src={props.entry.img.src} alt={props.entry.img.alt} className="main-image" /> 
      </div>
      <div className="info-container">
                <span className="country">{props.entry.country}</span>
                <a href={props.entry.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.entry.title}</h2>
                <p className="trip-dates">{props.entry.dates}</p>
                <p className="entry-text">{props.entry.text}</p> 
                {/* or can use {...entry} */}
      </div>
    </article>
  )
}