import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

// export default function App({ Component, pageProps }: AppProps) {

//   let persistor = persistStore(store);
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <Component {...pageProps} />
//       </PersistGate>
//     </Provider>
//   )
// }

