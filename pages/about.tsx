import Container from '@/components/Container'

const About = () => {
  return (
    <Container title="About – Erol Kocaman">
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          About Me
        </h1>
        <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
          <p>Hey, I’m Erol. I'm a backend developer.</p>
          <p>This is my bookmark for myself</p>
        </div>
      </div>
    </Container>
  )
}

export default About
