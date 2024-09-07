import "./Utils.scss"




const Container = ({ children }) => {
  return (
    <div className="container">
      {children}
    </div>
  )
}


const SkeletonCards = (props) => {
  return (
    <div className="skeleton-cards">
      {
        [...Array(props.count)].map((_, index) => (
          <div key={index} className="product-card-skeleton">
            <div className="skeleton image"></div>
            <div className="skeleton title"></div>
            <div className="skeleton price"></div>
            <div className="skeleton button"></div>
          </div>
        ))
      }
    </div>
  )
}

export { Container, SkeletonCards }