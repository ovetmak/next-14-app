"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import React from "react"

const navigationtest = () => {
  // CLIENT SIDE NAVIGATION
  // const router = useRouter()
  // since we use hook, the component hast to be "use client"

  // const pathname = usePathname()

  // const searchParams = useSearchParams()
  // const qwt = searchParams.get("asd")

  // const handleClick = () => {
  //   console.log("button clicked")
  // router.push("/")
  // to not add this route to the history stack, which will make unable to go back
  // router.replace("/")
  // will make a new request to a server & refresh data, refetch data
  // router.refresh()
  // will send you to a previous page
  // router.back()
  // will forward you to a next page
  // router.forward()

  // will show pathname without query
  // console.log(pathname)
  // will show query from line 13
  // console.log(qwt)
  // we can also set a new query using set() method
  // }

  return (
    <div>
      <Link href="/" prefetch={false}>
        Home page
      </Link>
      <button>Write and redirect</button>
      {/* <button onClick={handleClick}>Write and redirect</button> */}
    </div>
  )
}

export default navigationtest
