// import CachingExpensiveComputation from "./components/CachingExpensiveComputation"
// import PersistedMutableProperty from "./components/PersistedMutableProperty"
// import UseRefWorkingWithCSS from "./components/UseRefWorkingWithCSS"
// import UseRefWorkingWithInput from "./components/UseRefWorkingWithInput"
// import UserefAttributeValue from "./components/UserefAttributeValue"
// import UserefInnerText from "./components/UserefInnerText"
// import UseRefWorkingWithCSS from "./components/UseRefWorkingWithCSS"
import ArgumentsAndUses from "./components/ArgumentsAndUses"
import Form from "./components/Form"
import IncrementDecrement from "./components/IncrementDecrement"
import UseStateImmutableArray from "./components/UseStateImmutableArray"
import UseStateUnderstadingInside from "./components/UseStateUnderstadingInside"
import UsigAsyncAwait from "./components/UsigAsyncAwait"
import WindowTitle from "./components/WindowTitle"
import WindowWidth from "./components/WindowWidth"
import UseStateImmutableObject from "./components/useStateImmutableObject"


function App() {

  return (
    <>
      <h1>Meet With hook</h1>
      {/* <UserefInnerText></UserefInnerText>
      <UserefAttributeValue></UserefAttributeValue>
      <UseRefWorkingWithInput></UseRefWorkingWithInput>
      <UseRefWorkingWithCSS></UseRefWorkingWithCSS>
      <PersistedMutableProperty></PersistedMutableProperty>
      <CachingExpensiveComputation></CachingExpensiveComputation> */}
      <UseStateUnderstadingInside></UseStateUnderstadingInside>
      <UseStateImmutableObject></UseStateImmutableObject>
      <UseStateImmutableArray></UseStateImmutableArray>
      <Form></Form>
      <IncrementDecrement></IncrementDecrement>
      <ArgumentsAndUses></ArgumentsAndUses>
      <UsigAsyncAwait></UsigAsyncAwait>
      <WindowWidth></WindowWidth>
      <WindowTitle></WindowTitle>
    </>
  )
}

export default App

