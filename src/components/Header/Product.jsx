export const Product = (props) => {
    const { title, description, image } = props;
  
    return (
      <div className="product">
        <strong>{title}</strong>
        <p>{description}</p>
        {image && <img src={image} alt={title} />}
      </div>
    );
  };
  