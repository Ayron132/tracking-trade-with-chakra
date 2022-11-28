import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth, db } from '../config/firebase';
import { doc, DocumentData, getDoc } from "firebase/firestore";

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [user, setUser] = useState<any>(null);
  const [queryProducts, setQueryProducts] = useState<any>(null);
  const [marketplaceList, setMarketplaceList] = useState<any>(null);
  const [marketplaces, setMarketplaces] = useState<any>(null);
  const [price, setPrice] = useState<any>(null);
  const [temperature, setTemperature] = useState<any>(null);
  const [loading, setLoading] = useState(true)

  useEffect(() => {

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUser({
            uid: user.uid,
            email: user.email,
            name: data.name,
            image: data.image,
          })
        }
        const products = doc(db, "Data", "query_products");
        const productsSnap = await getDoc(products);
        if (productsSnap.exists()) {
          setQueryProducts(productsSnap.data());
        }
        const marketplaceList = doc(db, "Data", "query_marketplace_list");
        const marketplaceListSnap = await getDoc(marketplaceList);
        if (marketplaceListSnap.exists()) {
          setMarketplaceList(marketplaceListSnap.data());
        }
        const marketplaces = doc(db, "Data", "query_marketplaces");
        const marketplacesSnap = await getDoc(marketplaces);
        if (marketplacesSnap.exists()) {
          setMarketplaces(marketplacesSnap.data());
        }
        const price = doc(db, "Data", "query_price_chart");
        const priceSnap = await getDoc(price);
        if (priceSnap.exists()) {
          setPrice(priceSnap.data());
        }
        const temperature = doc(db, "Data", "query_temperature_chart");
        const temperatureSnap = await getDoc(temperature);
        if (temperatureSnap.exists()) {
          setTemperature(temperatureSnap.data());
        }
      } else {
        setUser(null)
      }

      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const logout = async () => {
    setUser(null)
    await signOut(auth)
  }

  return (
    <AuthContext.Provider value={{ user, queryProducts, marketplaceList, marketplaces, price, temperature, login, logout }}>
      {loading ? null : children}
    </AuthContext.Provider>
  )
}