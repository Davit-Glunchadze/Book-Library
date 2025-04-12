const Library = ({ title, children }) => {
  return (
    <div className="library">
      <h1 className="library-title">{title}</h1>
      <div className="books">{children}</div>
    </div>
  );
};

const Book = ({name,img, author_span,author,description_span, description, genre_span, genre, action, collection }) => {
  return (
    <div className="book">
      <h2 className="book-name">{name}</h2>
      <div className="book-img">
        <img src={img} alt={name} />
      </div>
      <div className="book-text">
        <h3 className="book-author">
          <span>{author_span}</span> {author}{" "}
        </h3>
        <p className="book-description">
          <span>{description_span}</span>
          {description}
        </p>
        <div className="genre">
          <span>{genre_span}</span>
          {genre.map((g, index) => (
            <div key={index}>{g}</div>
          ))}
        </div>
      </div>
      <button
        onClick={() => action(name, collection)}
        className="btn"
      >
        books edition
      </button>
    </div>
  );
};

export { Library, Book };
