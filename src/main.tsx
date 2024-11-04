import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Projects from './components/pages/projects.tsx';
import Skills from './components/pages/skills.tsx';
import { Travel } from './components/pages/travel.tsx';
import { ThemeProvider } from './components/theme-provider.tsx';
import './index.css';
import Home from './routes/home.tsx';


const router = createBrowserRouter([
  {
    path: "/me",
    element: <Home />,
  },
  {
    path: "me/skills",
    element: <Skills />,
  },
  {
    path: "me/projects",
    element: <Projects />,
  },
  {
    path: "me/travel",
    element: <Travel />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
)
