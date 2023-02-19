export const timeoutPromise = (timeoutDuration, error) => {
  if(error === undefined) {
    error = 'Timeout error';
  }

  return new Promise((resolve, reject) => {
    setTimeout(() => { reject(error) }, timeoutDuration)
  })
}

// const promise = timeoutPromise(100, 'Custom timeout error');