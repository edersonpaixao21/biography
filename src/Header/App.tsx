import avatarImg from "../assets/Avatar.png"
import linkedinImg from '../assets/linkedin.png'
import instagramImg from '../assets/instagram.png'
import facebookImg from '../assets/facebook.png'
import githubImg from '../assets/github.png'

import { Container } from "./styles"

export function App() {
  return (
    <Container>
      <div>
        <img className="avatar" src={avatarImg} alt="foto de perfil" />
        <h1>Ederson Paixão</h1>
        <p> @edersonpaixao </p>

        <ul>
          <li>
            <a href="https://www.linkedin.com/in/ederson-paix%C3%A3o-a14051242/">
              <img className="iconlinkedin" src={linkedinImg} alt="linkedin" />LINKEDIN</a>
          </li>

          <li>
            <a href="https://www.instagram.com/edersonpaixao/">
              <img className="iconinstagram" src={instagramImg} alt="instagram" />INSTAGRAM</a>
          </li>

          <li>
            <a href="https://www.facebook.com/ederson.paixao.737">
              <img className="iconfacebook" src={facebookImg} alt="facebook" />FACEBOOK</a>
          </li>

          <li>
            <a href="https://github.com/edersonpaixao21/">
              <img className="icongit" src={githubImg} alt="github" />GITHUB</a>
          </li>
        </ul>
      </div>
    </Container>  
  );
}