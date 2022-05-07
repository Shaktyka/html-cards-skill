
// Карточка товара:
const Card = (props) => {
    const {id, title, rating, reviews, price, salePrice, images, isAvailable, sale, isHit, cashback } = props.data;

    const imgUrl = `img/${images[0]}`;
    const className = `cards__item card`;

    return (
        <li className="cards__item card" tabIndex="0" id={id}>
            <span className="label label--sale card__label">
                Скидка 30%
            </span>
            <span className="label label--hit card__label">
                Хит
            </span>
            <span className="label label--cashback card__label">
                Кэшбэк 30%
            </span>
            <div className="card__img-wrap">
                <img 
                    className="img card__img" 
                    src={imgUrl}
                    width="auto" height="193"
                    alt="Название"
                />
            </div>
            <div className="card__description">
                <div className="card__prices">
                    <span className="card__price">{price} &#8381;</span>
                    <del className="card__price card__price--old">{price} &#8381;</del>
                </div>
                <h3 className="card__title">{title}</h3>
                <div className="card__info">
                    <p className="card__availability">
                        <img src="img/ok-arrow.svg" alt="" />
                        Есть в наличии
                    </p>
                    <div className="card__stars star-rate">
                        <img src="img/star.svg" alt="" />
                        <img src="img/star.svg" alt="" />
                        <img src="img/star.svg" alt="" />
                        <img src="img/star.svg" alt="" />
                        <img src="img/star.svg" alt="" />
                    </div>
                    <a className="card__reviews link" href="#">246 отзывов</a>
                </div>
                <div className="card__buttons">
                    <button className="button card__button button--accent">Добавить в корзину</button>
                    <button className="button card__button" type="button">
                        <img 
                            className="button__img" src="img/heart.svg" 
                            width="20" height="20" 
                            alt="Кнопка 'В избранное'"
                        />
                        <span className="visually-hidden">Добавить в избранное</span>
                    </button>
                    <button className="button card__button card__button--buy" type="button">
                        <img 
                            className="button__img" src="img/compare.svg" 
                            width="20" height="20" 
                            alt="Кнопка 'Сравнить'"
                        />
                        <span className="visually-hidden">Сравнить</span>
                    </button>
                </div>
            </div>
        </li>
    );
};

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

// Приложение
const App = ({cards}) => {
    return (
        <Main cards={cards} />
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App cards={data} />);
 