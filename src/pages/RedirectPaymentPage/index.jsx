import { useEffect } from "react"
//
const RedirectPage = (result) => {
   useEffect(() => {
        window.location.replace(result)
    }, [])
}
export {RedirectPage}