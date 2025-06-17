import './index.css'

import Home from '@/pages/home'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Home />
	</StrictMode>
)
