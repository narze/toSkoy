/** @jsx jsx */
import { jsx } from '@emotion/core'
import tw from '@tailwindcssinjs/macro'
import { Button, Textarea } from '@chakra-ui/core'
import Skoy from 'skoy'
import { useState } from 'react'

export const Home = (): JSX.Element => {
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")

  function handleInputChange(e) {
    setInput(e.target.value)
  }

  function convertToSkoy() {
    setOutput(Skoy.convert(input))
  }

  return (
    <main>
      <div css={tw`mt-8 grid gap-4 grid-cols-1 justify-center items-center`}>
        <Textarea data-testid="input" value={input} onChange={handleInputChange}>

        </Textarea>
        <Button variantColor="teal" variant="solid" onClick={convertToSkoy}>
          แปลงเป็นภาษาสก๊อย
        </Button>
        <Textarea data-testid="output" value={output} isReadOnly={true}>

        </Textarea>
      </div>
    </main>
  )
}

export default Home
