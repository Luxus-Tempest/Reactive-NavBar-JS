export const ItemLeftPanel = (props) => {
    const { title, description, onMouseOver } = props;
  
    return (
      <div className="item-left-panel" onMouseOver={onMouseOver}>
        <strong>{title}</strong>
        {description && <p>{description}</p>}
      </div>
    );
  };
  