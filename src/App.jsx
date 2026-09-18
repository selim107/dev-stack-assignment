import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechnologyCard from './components/TechnologyCard'
import StackSidebar from './components/StackSidebar'
import Footer from './components/Footer'

export default function App() {
  const [technologies, setTechnologies] = useState([])
  const [stack, setStack] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch('/data/technologies.json')
        if (!response.ok) throw new Error('Failed to load technology data')
        const data = await response.json()
        setTechnologies(data)
      } catch (error) {
        console.error(error)
        toast.error('Could not load technology data.')
      } finally {
        setLoading(false)
      }
    }

    loadTechnologies()
  }, [])

  const addToStack = (technology) => {
    const alreadyAdded = stack.some((item) => item.id === technology.id)

    if (alreadyAdded) {
      toast.warning(`${technology.name} is already in your stack.`)
      return
    }

    setStack((currentStack) => [...currentStack, technology])
    toast.success(`${technology.name} added to your stack.`)
  }

  const removeFromStack = (technology) => {
    setStack((currentStack) => currentStack.filter((item) => item.id !== technology.id))
    toast.info(`${technology.name} removed from your stack.`)
  }

  const removeAll = () => {
    setStack([])
    toast.info('All technologies removed from your stack.')
  }

  return (
    <div className="min-h-screen bg-[#fbfbfd]">
      <Navbar />
      <main>
        <Hero />

        <section id="technologies" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-14 sm:px-6 md:py-20 lg:px-8">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-violet-600">Explore Technologies</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl">
                Choose the right tools
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Browse frontend, backend, database, language, styling, DevOps, and developer tools to create your stack.
              </p>
            </div>
          </div>

          <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_320px]">
            <div>
              {loading ? (
                <div className="flex min-h-[360px] items-center justify-center rounded-2xl border border-slate-200 bg-white">
                  <div className="flex flex-col items-center gap-3">
                    <span className="loading loading-spinner loading-lg text-violet-600" />
                    <p className="text-sm font-semibold text-slate-500">Loading technologies...</p>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {technologies.map((technology) => (
                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      isAdded={stack.some((item) => item.id === technology.id)}
                      onAdd={addToStack}
                    />
                  ))}
                </div>
              )}
            </div>

            <StackSidebar stack={stack} onRemove={removeFromStack} onRemoveAll={removeAll} />
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
          <div className="rounded-3xl border border-violet-100 bg-gradient-to-r from-orange-50 via-pink-50 to-violet-50 p-7 sm:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.16em] text-violet-600">Projects</p>
            <h2 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">Build a stack that matches your project.</h2>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Start with the essentials, then add tools based on your product needs, team workflow, and deployment strategy.
            </p>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-4 pb-14 sm:px-6 md:pb-20 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['01', 'Explore', 'Understand what each technology does and where it fits.'],
              ['02', 'Compare', 'Look at category, difficulty, rating, and practical strengths.'],
              ['03', 'Build', 'Add your choices to one stack and refine it as your idea grows.'],
            ].map(([number, title, text]) => (
              <article key={number} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                <span className="text-xs font-black text-violet-500">{number}</span>
                <h3 className="mt-4 text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ToastContainer
  position="top-right"
  autoClose={2200}
  hideProgressBar
  theme="light"
  style={{
    top: "580px",
    right: "50px",
  }}
/>
    </div>
  )
}
