import Link from 'next/link'

import Container from '@/components/Container'

const NotFound = () => {
  return (
    <Container title="404">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          404 – Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Better to check the URL is correct...
        </p>
        <Link href="/">
          <a className="p-1 sm:p-4 w-64 font-bold mx-auto bg-gray-100 dark:bg-gray-900 text-center rounded-md text-black dark:text-white">
            Home
          </a>
        </Link>
      </div>
    </Container>
  )
}

export default NotFound
