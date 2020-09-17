/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import tw from '@tailwindcssinjs/macro'
import { Textarea } from '@chakra-ui/core'
import Skoy from 'skoy'
import { useState } from 'react'

export const Home = (): JSX.Element => {
  const [input, setInput] = useState('สวัสดี')
  const [output, setOutput] = useState('ษวัษดลีร์')

  function handleInputChange(e) {
    const nextInput = e.target.value
    setInput(nextInput)
    setOutput(Skoy.convert(nextInput))
  }

  return (
    <main
      css={tw`flex justify-center items-center min-w-full h-screen text-center`}
    >
      <div css={[tw`flex flex-col`, css`min-width: 640px: max-width: 50%`]}>
        <h1 css={tw`text-6xl`}>toSkoy</h1>
        <Textarea
          textAlign="center"
          my={4}
          fontSize="2rem"
          data-testid="input"
          value={input}
          onKeyDown={handleInputChange}
          onChange={handleInputChange}
          placeholder="ภาษาไทย"
          tabIndex={0}
        />
        <Textarea
          textAlign="center"
          my={4}
          fontSize="2rem"
          data-testid="output"
          value={output}
          isReadOnly={true}
          placeholder="พ๊ษ๊สก๊อยย์"
        />
      </div>
    </main>
  )
}

export default Home
