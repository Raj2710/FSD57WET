
function Card ({imageUrl,title,description}){
    return <div className="col-lg-4 col-sm-6 mb-4">
    <div className="card h-100">
      <a href="#"><img className="card-img-top" src={imageUrl} alt={title} height={"200px"} width={"200px"}/></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="#">{title}</a>
        </h4>
        <p className="card-text">{description}</p>
      </div>
    </div>
  </div>
  }

  export default Card