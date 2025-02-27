import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import { useEffect } from "react";

import { PageTransition } from "./components";
import { Home, Expenses, NotFound } from "./pages";
import { useExpenseStore } from "./store";
import { useTheme } from "./store";
import { ThemeOptions } from "./types";
import { RootLayout } from "./layouts";

// Router with Animated Routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<PageTransition component={<Home />} />} />
      <Route path="/expenses" element={<PageTransition component={<Expenses />} />} />
      <Route path="*" element={<PageTransition component={<NotFound />} />} />
    </Route>
  )
);

export default function App() {

  const { fetchExpenses } = useExpenseStore()
  const { changeTheme } = useTheme()

  useEffect(() => {

    // setting the theme based on localstorage
    changeTheme(localStorage.getItem('themeMode') as ThemeOptions)

    // fetching all the expenses
    fetchExpenses()
  }, [])

  return <RouterProvider router={router} />;
}
