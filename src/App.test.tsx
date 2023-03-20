import { App } from "./App"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import React from "react"

it("renders hello message", () => {
	render(<App />)
	expect(screen.getByText("Hello World!")).toBeInTheDocument()
})
