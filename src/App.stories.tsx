import { App } from "./App"
import { ComponentStory, ComponentMeta } from "@storybook/react"
import React from "react"

export default {
	title: "Components/App",
	component: App,
} as ComponentMeta<typeof App>

const Template: ComponentStory<typeof App> = (args) => <App {...args} />

export const Default = Template.bind({})
