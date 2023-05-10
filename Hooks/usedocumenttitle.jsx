import {useEffect} from 'react'

export const usedocumenttitle = (count) => {

  useEffect(() => {
    document.title = `count ${count} `
})

}
