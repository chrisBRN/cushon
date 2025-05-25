import Navigation from "./components/Navigation/Navigation.tsx";
import Header from "./components/Header/Header.tsx";
import ISA from "./pages/ISA/ISA.tsx";

function App() {
    return (
        <body>
            <Navigation title="A Real Cushon Page"/>
            <Header title="Choose an ISA"/>
            <ISA />
        </body>
    )
}

export default App
