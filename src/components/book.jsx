const Library = (props) => {
  return (
    <div className="library">
      <h1 className="library-title">{props.title}</h1>
      <div className="books">{props.children}</div>
    </div>
  );
};

const Book = (props) => {
  return (
    <div className="book">
      <h2 className="book-name">{props.name}</h2>
      <div className="book-img">
        <img src={props.img} alt={props.name} />
      </div>
      <div className="book-text">
        <h3 className="book-author">
          <span>{props.author_span}</span> {props.author}{" "}
        </h3>
        <p className="book-description">
          <span>{props.description_span}</span>
          {props.description}
        </p>
        <div className="genre">
          
            <span>{props.genre_span}</span>
            {props.genre.map((g, index) => <div key={index}>{g}</div>)}
        </div>
      </div>
      <button onClick={() => props.action(props.name, props.collection)} className="btn">books edition</button>
    </div>
  );
};

export { Library, Book };
