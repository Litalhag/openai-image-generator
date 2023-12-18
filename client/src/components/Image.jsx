const Image = ({ imageUrl, errorMessage }) => {
  return (
    <section className="image">
      <div className="image-container">
        <h2 className="msg">{errorMessage}</h2>
        {imageUrl && <img src={imageUrl} alt="Generated" id="image" />}
      </div>
    </section>
  )
}

export default Image
