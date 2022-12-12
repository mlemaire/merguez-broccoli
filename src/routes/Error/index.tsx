import React from 'react'
import { useRouteError } from 'react-router-dom'
import errorImg from '../../assets/error.svg'

export default function ErrorPage() {
  const error: any = useRouteError()
  console.error(error)

  return (
    <div id="error-page" className="relative flex flex-col items-center">
      <div className="text-center leading-tight mt-8">
        <h1 className="font-pacifico text-red-600 text-9xl md:text-[12rem]">
          {error.status}
        </h1>
        <p className="text-3xl text-slate-800">
          {error.statusText || error.message}
        </p>
      </div>
      <img src={errorImg} className="w-full max-w-2xl" aria-hidden="true" />
    </div>
  )
}
