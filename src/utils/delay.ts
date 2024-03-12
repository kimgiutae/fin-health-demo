const delay: Delay = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}

type Delay = (milliseconds: number) => Promise<void>

export default delay
