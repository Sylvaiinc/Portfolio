import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import MainTheme from "@Main/page"
import ShellTheme from "@Shell/page"
import { ShellProvider } from "@Shell/providers/shellProvider"

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
