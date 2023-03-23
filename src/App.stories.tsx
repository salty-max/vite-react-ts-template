import { App } from "./App"
import { StoryFn } from "@storybook/react"

export default {
	title: "Components/App",
	component: App,
}

const Template: StoryFn<typeof App> = (args) => <App {...args} />

export const Default = Template.bind({})
