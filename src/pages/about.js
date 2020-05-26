import { NextSeo } from 'next-seo'

// --- Components
import { Flex, Layout, Link, Text } from 'components'

const url = 'https://onur.dev/about'
const title = 'About Me – Onur Şuyalçınkaya'

const About = () => (
  <>
    <NextSeo
      title={title}
      canonical={url}
      openGraph={{
        url,
        title
      }}
    />
    <Layout>
      <Flex flexDirection="column" justifyContent="flex-start" alignItems="flex-start">
        <Text
          as="h1"
          fontFamily="display"
          fontSize={{ _: 32, md: 48 }}
          fontWeight={500}
          letterSpacing="-0.025em"
          // color="#000"
          mt={0}
          mb={10}
        >
          About Me
        </Text>
        <Text as="p" lineHeight={1.5}>
          Hey, I'm Onur. I'm a Frontend Engineer who dabbles in design with a strong sense of aesthetics, living in
          Istanbul, Turkey where currently developing things on <Link href="https://yemek.com">yemek.com</Link> at{' '}
          <Link href="https://yemek.com">Yemeksepeti</Link> which is the first and biggest online food ordering company
          in Turkey.
        </Text>
        <Text as="p" lineHeight={1.5}>
          Previously, I worked as a Full Stack Developer at Sistaş, React Native Developer at Tanbula and Specialist at
          Apple.
        </Text>
        <Text as="p" lineHeight={1.5}>
          I grew up in Ankara—the capital city of Turkey—and went to Doğuş University, graduating with a degree in
          Computer Engineering. I spend my free time contributing to open source, sharing everything I know through my{' '}
          <Link href="/blog">blog</Link> and <Link href="https://medium.com/@suyalcinkaya">Medium</Link>, DJing, doing
          bodybuilding, playing Football Manager (since 2000), watching my favorite team's—Beşiktaş 🦅— football matches
          and enjoying time with friends and family.
        </Text>
      </Flex>
    </Layout>
  </>
)

export default About
