import Navigation from "./components/Navigation/Navigation.tsx";
import Header from "./components/Header/Header.tsx";
import ISA from "./pages/ISA/ISA.tsx";
import Footer from './components/Footer/Footer.tsx';

function App() {
    return (
        <>
            <Navigation title="A Real Cushon Page"/>
            <Header title="Choose an ISA"/>
            <ISA />
            <Footer />
        </>
    )
}

export default App
