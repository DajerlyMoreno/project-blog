import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsFacebook, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className="border border-t-2 border-stone-200">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-2 px-2">
            <Link to="/">
              <div className="h-32 w-32 overflow-hidden rounded-full border border-yellow-400">
                <img
                  className="h-full bg-cover"
                  src="../../public/logo-empresa.svg"
                  alt="Logo-neo"
                />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm: mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="Acerca de" />
              <Footer.LinkGroup col>
                <Footer.Link href="/about" rel="noopener noreferrer">
                  Nosotros
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Síguenos" />
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/andradevgo/back-blog-project"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link href="#" rel="noopener noreferrer">
                  Twitter
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />
              <Footer.LinkGroup col>
                <Footer.Link href="#" rel="noopener noreferrer">
                  Política de privacidad
                </Footer.Link>
                <Footer.Link href="#" rel="noopener noreferrer">
                  Términos &amp; Condiciones
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between gap-3">
          <Footer.Copyright
            href="#"
            by="N E O Solutions S.A.S"
            year={new Date().getFullYear()}
          />
          <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitterX} />
            <Footer.Icon
              href="https://github.com/andradevgo/project-blog"
              icon={BsGithub}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
