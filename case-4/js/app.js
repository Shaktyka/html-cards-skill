// Тестовый элемент
const PageTitle = () => {
    return (
        <h1>Каталог</h1>
    );
}

// Приложение
const App = () => {
    return (
        <PageTitle />
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
