import Button from "../components/Button";

export default {
  title: "Button",
  component: Button
}

const Template = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args={
  theme:"primary",
  className:"p-2",
  size:"",
  children:"Press me",
}

export const Outline = Template.bind({})
Outline.args={
  theme:"",
  className:"p-2",
  size:"",
  children:"Press me",
}


// OR the down below but we need to use it has above

// export const Primary = () => <Button theme="primary" className="p-2" size="" children="Press me" />

// export const Outline = () => {
//   return <Button className="p-2" children="Press me" />
// }