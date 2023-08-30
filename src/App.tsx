import {Suspense, useState} from 'react'
import PublicRoutes from "@/routes/PublicRoutes.tsx";
import PrivateRoutes from "@/routes/PrivateRoutes.tsx";
import {AppStyles} from "@/App.styled.ts";
import Header from "@/features/Header.tsx";

function App() {

  return (
      <>
          <AppStyles/>
          <Header/>
      <Suspense fallback={'Loading...'}>
      <PublicRoutes></PublicRoutes>
      <PrivateRoutes></PrivateRoutes>
      </Suspense>
      </>
  )
}

export default App
