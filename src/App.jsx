import PersistedMutableProperty from "./components/PersistedMutableProperty"
import UseRefWorkingWithCSS from "./components/UseRefWorkingWithCSS"
import UseRefWorkingWithInput from "./components/UseRefWorkingWithInput"
import UserefAttributeValue from "./components/UserefAttributeValue"
import UserefInnerText from "./components/UserefInnerText"

function App() {

  return (
    <>
      <h1>Meet With hook</h1>
      <UserefInnerText></UserefInnerText>
      <UserefAttributeValue></UserefAttributeValue>
      <UseRefWorkingWithInput></UseRefWorkingWithInput>
      <UseRefWorkingWithCSS></UseRefWorkingWithCSS>
      <PersistedMutableProperty></PersistedMutableProperty>
    </>
  )
}

export default App
