import Head from 'next/head'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect } from 'react'
import { SideBar } from '../components'

interface AppLayoutProps {
  children: ReactNode,
  title?: string
}


export const AppLayout = ({ children, title }: AppLayoutProps) => {

  const router = useRouter()

  let name;

  let url = router.pathname.split('/')

  console.log(router.pathname);

  if (router) {
    if (url.length > 2) {
      name = url[2].replaceAll('-', ' ')
      console.log(url);
      
    } else {
      name = url[1]
    }
  }
  

  // useEffect(() => {
  //   if (router) {
  //     if (url.length > 2) {
  //       name = url[2].replaceAll('-', ' ')
  //     } else {
  //       name = url[1]
  //     }
  //   }
  // }, [router])




  return (

    <section className="flex h-screen w-screen bg-neutral_base pr-2 ">
      <SideBar />
      <section className='w-full'>
        <div className="relative pt-5 px-3 pb-3 flex gap-x-6 items-center">
          <h2 className="text-2xl font-bold text-primary_800 whitespace-nowrap">{name}</h2>

          <input
            className="w-4/5 bg-neutral_900 rounded-md py-1 px-11 ml-8 outline-none"
            type="search"
            name="search"
            id="search"
            placeholder="Search"
          />
          <i className="bi bi-search absolute left-40 m-8"></i>
          <i className="bi bi-bell bg-primary_800 rounded-full w-max text-white  px-2 py-1"></i>
        </div>
        <div className="grid grid-cols-[6fr_1.5fr] gap-x-4 px-10 pt-5">
          {
            children
          }
          {/* <aside className="bg-white shadow-300 p-4 rounded-lg h-100 w-full">
            Aside
          </aside> */}
        </div>
      </section>
    </section>

  )
}