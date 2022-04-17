
// Карточка товара:
const Card = (props) => {
    const {id, title, rating, reviews, price, salePrice, images, isAvailable, sale, isHit, cashback } = props.data;

    const imgUrl = `img/${images[0]}`;
    const className = `cards__item card`;

    return (
        <li className={className} tabIndex="0" id={id}>
            карточка
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

// Тестовый элемент
const PageTitle = () => {
    return (
        <h1>Каталог</h1>
    );
}

// Приложение
const App = ({cards}) => {
    return (
        <Main cards={cards} />
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App cards={data} />);
 