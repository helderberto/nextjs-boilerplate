import * as S from './styles'

const Main = ({
  title = 'Next.js Boilerplate',
  description = 'TypeScript, ReactJS, NextJS & Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Image of an atom and written React Avançado at the side."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer in front of a screen with code."
    />
  </S.Wrapper>
)

export default Main
