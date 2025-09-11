import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import MainTheme from "./Page/MainTheme/page"
import ShellTheme from "./Page/ShellTheme/page"
import { ShellProvider } from "./Page/ShellTheme/providers/shellProvider"

function App() {
	return <BrowserRouter>
		<Routes>
			<Route path="/" element={<MainTheme/>}/>
			<Route path="/1" element={<ShellProvider>
				<ShellTheme/>
			</ShellProvider>}/>
		</Routes>
	</BrowserRouter>
}

export default App
