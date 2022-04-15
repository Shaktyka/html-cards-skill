
// Карточка товара:
const Card = (props) => {
    const {id, title, article, rating, reviews, price, image, isSale, isHit, isNew} = props.data;

    const imgUrl = `img/${image}`;

    const className = `cards__item card ${isSale === true ? 'card--sale': ''} ${isHit === true ? 'card--hit' : ''} ${isNew === true ? 'card--new' : ''}`;

    return (
        <li className={className} tabIndex="0" id={id}>
            <span className="label label--new card__label">
                Новинка
            </span>
            <span className="label label--sale card__label">
                Скидка 50%
            </span>
            <span className="label label--hit card__label">
                Хит
            </span>
            <div className="card__img-wrap">
                <img 
                    className="img card__img" 
                    src={imgUrl}
                    width="270" height="200"
                    alt={title}
                />
            </div>
            <div className="card__description">
                <div className="card__info">
                    <span className="card__articul">Артикул: {article}</span>
                    <div className="card__rating">
                        <span className="card__stars">
                            <img 
                                className="card__star" 
                                src="img/star.svg" 
                                width="15" height="15"
                                alt="Звезд рейтинга"
                            />{rating}
                        </span>
                        <a className="card__reviews" href="#">{reviews} отзывов</a>
                    </div>
                </div>
                <h3 className="card__title">{title}</h3>
                <div className="card__buy">
                    <div className="card__prices">
                        <span className="card__price">{price} &#8381;</span>
                        <span className="card__price card__price--old">435 &#8381;</span>
                    </div>
                    <div className="card__buttons">
                        <button className="button card__button" type="button">
                            <img 
                                className="button__img" src="img/heart.svg" 
                                width="20px" height="20px" 
                                alt="Кнопка 'В избранное'"
                            />
                            <span className="visually-hidden">Добавить в избранное</span>
                        </button>
                        <button className="button card__button card__button--buy" type="button">
                            <img 
                                className="button__img" src="img/cart.svg" 
                                width="20px" height="20px" 
                                alt="Кнопка 'В корзину'"
                            />
                            <span className="visually-hidden">Добавить в корзину</span>
                        </button>
                    </div>
                </div>
            </div>
        </li>
    );
}

// Список карточек
const CardsList = ({cards}) => {

    return (
        <section className="cards">
            <ul className="list cards__list">
            {
                cards.map((dataObj) => <Card key={dataObj.id} data={dataObj} />)
            }
            </ul>
        </section>
    );
};

// Контейнер страницы
const Main = ({cards}) => {
    return (
        <main className="main">
            <div className="container">
                <CardsList cards={cards} />
            </div>
        </main>
    );
};

// Тестовый элемент
const PageTitle = () => {
    return (
        <h1>Каталог</h1>
    );
}

// Приложение
const App = () => {
    return (
        <Main cards={cards} />
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
