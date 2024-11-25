import Image from 'next/image'
import Article from '../components/Article'

export default function Home() {
  return (
      <main className="min-h-screen bg-gray-100 py-8">
        <div className="container mx-auto bg-white shadow-lg">
          <header className="border-b border-gray-200 py-6 flex items-center justify-center">
            <Image
                src="/images/la-nacion-logo.png"
                alt="La Nación Logo"
                width={200}
                height={50}
            />
          </header>
          <Article />
        </div>
      </main>
  )
}

