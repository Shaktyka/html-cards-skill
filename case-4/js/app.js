// Типы акций
const actionTypeDictionary = {
    sale: 'Скидка',
    hit: 'Хит',
    cashback: 'Кэшбэк'
};

// Лейбл
const Label = ({type, amount = 0}) => {
    const className = `label label--${type}`;
    const actionName = actionTypeDictionary[type];
    const actionValue = amount !== 0 ? `${actionName} ${amount}%` : actionName;

    return (
        <span className={className}>
            {actionValue}
        </span>
    );
};

// Карточка товара:
const Card = (props) => {
    const {id, title, rating, reviews, price, salePrice, images, isAvailable, action, amount } = props.data;

    const imgUrl = `img/${images[0]}`;
    const actionClass = action ? `card--${action}` : null;
    const className = `cards__item card ${actionClass}`;

    const rewiewsForms = ['отзыв', 'отзыва', 'отзывов'];
    const reviewsWord = declOfNum(reviews, rewiewsForms);

    const priceWithSale = salePrice ? salePrice : price;

    return (
        <li className={className} tabIndex="0" id={id}>
            {
                <Label type={action} amount={amount} />
            }
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
                    <span className="card__price">{formatPrice(priceWithSale)} <span className="card__price-ruble">&#8381;</span></span>
                    <del className="card__price card__price--old">{formatPrice(price)} <span className="card__price-ruble">&#8381;</span></del>
                </div>
                <h3 className="card__title">{title}</h3>
                <div className="card__info">
                    <p className="card__availability">
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 4L5.36364 8L13 1" stroke="#17CA29" strokeWidth="2"/>
                        </svg>
                        {
                            isAvailable ? 'Есть в наличии' : 'Нет в наличии'
                        }
                    </p>
                    <div className="card__rating">
                        <img src="img/star.svg" alt="" />
                        <span className="card__rating-value">{rating}</span>
                    </div>
                    <a className="card__reviews link" href="#">{reviews} {reviewsWord}</a>
                </div>
                <div className="card__buttons">
                    <button className="button card__button button--colored">В корзину</button>
                    <button className="button card__button button--icon" type="button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.33525 3.71092L1.9817 3.35737L2.33525 3.71092ZM2.33525 10.4174L2.6888 10.0639H2.6888L2.33525 10.4174ZM9.23079 17.313L9.58573 16.9608L9.58435 16.9594L9.23079 17.313ZM10.7449 17.3369L11.0985 17.6904C11.1094 17.6795 11.1198 17.6681 11.1296 17.6562L10.7449 17.3369ZM10.745 17.3368L10.3914 16.9833C10.3805 16.9942 10.3701 17.0056 10.3603 17.0174L10.745 17.3368ZM17.6643 10.4175L17.3108 10.0639L17.6643 10.4175ZM17.6643 3.71097L18.0179 3.35742L18.0179 3.35742L17.6643 3.71097ZM14.3111 2.32201V1.82201V2.32201ZM10.9578 3.71097L11.3114 4.06453V4.06453L10.9578 3.71097ZM9.99982 4.669L9.64627 5.02255C9.84153 5.21781 10.1581 5.21781 10.3534 5.02255L9.99982 4.669ZM9.04174 3.71092L8.68819 4.06447L9.04174 3.71092ZM5.6885 2.32196L5.6885 2.82196H5.6885V2.32196ZM1.44629 7.06417C1.44629 5.93906 1.89323 4.86004 2.6888 4.06447L1.9817 3.35737C0.998591 4.34047 0.446289 5.67385 0.446289 7.06417H1.44629ZM2.6888 10.0639C1.89323 9.26829 1.44629 8.18927 1.44629 7.06417H0.446289C0.446289 8.45449 0.998591 9.78786 1.9817 10.771L2.6888 10.0639ZM9.58435 16.9594L2.6888 10.0639L1.9817 10.771L8.87724 17.6665L9.58435 16.9594ZM8.87586 17.6651C8.88423 17.6736 8.89263 17.682 8.90105 17.6904L9.60816 16.9833C9.60067 16.9758 9.59319 16.9683 9.58572 16.9608L8.87586 17.6651ZM8.90105 17.6904C9.50786 18.2972 10.4917 18.2972 11.0985 17.6904L10.3914 16.9833C10.1751 17.1996 9.82444 17.1996 9.60816 16.9833L8.90105 17.6904ZM11.1296 17.6562L11.1297 17.6562L10.3603 17.0174L10.3602 17.0175L11.1296 17.6562ZM11.0985 17.6904L18.0179 10.771L17.3108 10.0639L10.3914 16.9833L11.0985 17.6904ZM18.0179 10.771C19.001 9.78792 19.5533 8.45454 19.5533 7.06422H18.5533C18.5533 8.18932 18.1063 9.26834 17.3108 10.0639L18.0179 10.771ZM19.5533 7.06422C19.5533 5.6739 19.001 4.34053 18.0179 3.35742L17.3108 4.06453C18.1063 4.8601 18.5533 5.93912 18.5533 7.06422H19.5533ZM18.0179 3.35742C17.0348 2.37432 15.7014 1.82201 14.3111 1.82201V2.82201C15.4362 2.82201 16.5152 3.26896 17.3108 4.06453L18.0179 3.35742ZM14.3111 1.82201C12.9208 1.82202 11.5874 2.37432 10.6043 3.35742L11.3114 4.06453C12.107 3.26896 13.186 2.82201 14.3111 2.82201V1.82201ZM10.6043 3.35742L9.64627 4.31544L10.3534 5.02255L11.3114 4.06453L10.6043 3.35742ZM8.68819 4.06447L9.64627 5.02255L10.3534 4.31544L9.3953 3.35737L8.68819 4.06447ZM5.6885 2.82196C6.8136 2.82196 7.89262 3.26891 8.68819 4.06447L9.3953 3.35737C8.41219 2.37426 7.07882 1.82196 5.6885 1.82196V2.82196ZM2.6888 4.06447C3.48437 3.26891 4.56339 2.82196 5.6885 2.82196L5.6885 1.82196C4.29818 1.82196 2.9648 2.37426 1.9817 3.35737L2.6888 4.06447Z" fill="#797D80"/>
                        </svg>
                        <span className="visually-hidden">Добавить в избранное</span>
                    </button>
                    <button className="button card__button button--icon card__button--buy" type="button">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.60962 18.5402L5.60962 11.0691" stroke="#797D80"/>
                            <path d="M8.53638 18.5402V1.46341" stroke="#797D80"/>
                            <path d="M11.4634 18.5402L11.4634 8.93451" stroke="#797D80"/>
                            <path d="M14.3901 18.5402V1.46341" stroke="#797D80"/>
                        </svg>
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
 