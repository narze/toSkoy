/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import tw from '@tailwindcssinjs/macro'
import { Button, Textarea } from '@chakra-ui/core'
import { useState } from 'react'
import Skoy from 'skoy'
import { CopyToClipboard } from 'react-copy-to-clipboard'

export const Home = (): JSX.Element => {
  const [input, setInput] = useState('สวัสดี')
  const [output, setOutput] = useState('ษวัษดลีร์')
  const [message, setMessage] = useState('')

  function handleInputChange(e) {
    const nextInput = e.target.value
    setInput(nextInput)
    setOutput(Skoy.convert(nextInput))
    setMessage('')
  }

  return (
    <main
      css={tw`flex justify-center items-center min-w-full h-screen text-center`}
    >
      <div css={[tw`flex flex-col`, css`min-width: 640px: max-width: 50%`]}>
        <h1 css={tw`text-6xl`}>
          toSkoy<span css={tw`text-sm`}>next</span>
        </h1>
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
        <CopyToClipboard
          text={output}
          onCopy={() => setMessage('ก๊อปเร่รฬฬษ์')}
        >
          <Button
            fontSize="2rem"
            my={4}
            w="100%"
            size="lg"
            variantColor="teal"
            variant="solid"
          >
            ก๊อป
          </Button>
        </CopyToClipboard>
        <div data-testid="message">{message}</div>
      </div>

      <div css={tw`fixed bottom-0 pb-8 text-center`}>
        <a
          href="https://github.com/narze/toSkoy"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>
      </div>
    </main>
  )
}

export default Home
