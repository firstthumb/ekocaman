import Container from '../components/Container'
import BlogPost from '../components/BlogPost'

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 24 * 60 * 60,
  }
}

const Home = ({}) => {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Erol
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’m a developer. I've worked many tech companies like gaming and
          telecommunication companies. Here I try to write down all my learnings
          as it is no ending story.
        </h2>
        <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
          Most Popular Posts
        </h3>
        <BlogPost
          title="Hello World"
          summary="Hello world again and again."
          slug="hello-world"
        />
      </div>
    </Container>
  )
}

export default Home
