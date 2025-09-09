import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import MainTheme from "./Page/MainTheme/page"
import ShellTheme from "./Page/ShellTheme/page"

function App() {
	return <BrowserRouter>
		<Routes>
			<Route path="/" element={<MainTheme/>}/>
			<Route path="/1" element={<ShellTheme/>}/>
		</Routes>
	</BrowserRouter>
}

export default App
