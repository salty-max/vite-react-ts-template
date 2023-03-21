import React, { FC, useState } from "react"

export const App: FC = () => {
	const [counter, setCounter] = useState<number>(0)

	return (
		<main className="p-4">
			<h1 className="text-heading-xl font-bold text-primary">Hello World!</h1>
			<button
				className="bg-button-default hover:bg-button-hover text-button-primary text-button px-2 py-1.5 rounded-1.5 cursor-pointer"
				onClick={() => {
					setCounter((prev) => ++prev)
				}}
			>
				{`count is ${counter}`}
			</button>
		</main>
	)
}
