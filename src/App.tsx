import {Suspense, useState} from 'react'
import PublicRoutes from "@/routes/PublicRoutes.tsx";
import PrivateRoutes from "@/routes/PrivateRoutes.tsx";

function App() {

  return (
      <Suspense fallback={'Loading...'}>
      <PublicRoutes></PublicRoutes>
      <PrivateRoutes></PrivateRoutes>
      </Suspense>
  )
}

export default App
