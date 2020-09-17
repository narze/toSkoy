/*
  Example with @emotion/core
*/

/** @jsx jsx */
import { css, jsx } from '@emotion/core'

import tw from '@tailwindcssinjs/macro'

//"react native style"
const styles = {
  button: tw`
    relative
    w-64 min-w-full
    flex justify-center
    py-2 px-4
    border border-transparent
    text-sm leading-5 font-medium
    rounded-md
    text-white
    bg-teal-600
    hover:bg-teal-500
    focus[outline-none border-teal-700 shadow-outline-teal]
    active:bg-teal-700
    transition duration-150 ease-in-out
  `,
}

const ButtonReact = ({ className = '', children, ...props }) => (
  <button
    {...props}
    css={styles.button}
    className={['group', className].join(' ')}
  >
    {/* inline style */}
    <span css={tw`absolute left-0 inset-y-0 flex items-center pl-3`}>
      {/* compose styles with array */}
      <svg
        css={[
          tw`h-5 w-5 group-hover:text-teal-400 transition ease-in-out duration-150`,
          css`
            color: hotpink;
          `,
        ]}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    {children}
  </button>
)

export default ButtonReact
