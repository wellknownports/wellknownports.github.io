import React, { useState, useCallback } from "react";
import {
  GlobalStyle,
  ThemeProvider,
  Themes,
  List,
  Frame,
  ProgressBar,
  TaskBar,
} from "@react95/core";
import Janne_pixelated from "../janne_pixelated.png";
import socialMedia from "./socialMedia";
import Shortcuts from "./desktopIcons";
import * as S from "./layoutStyling";
import "./styles.scss";
import {
  Progman37,
  Mspaint,
  Shdocvw257,
  User,
  Explorer103,
  CdMusic,
  Progman34,
  Mail,
} from "@react95/icons";
import Portfolio from "./portfolio";
import CV from "./cv";

function Desktop() {
  /* Mobile detection */
  const isMobile =
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );

  const [items] = useState([]);

  /* About Modal */
  const [showAboutModal, setShowAboutModal] = useState(true);
  const handleOpenAboutModal = useCallback(() => {
    setShowAboutModal(true);
  }, []);
  const handleCloseAboutModal = useCallback(() => {
    setShowAboutModal(false);
  }, []);

  /* Skills Modal */
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  const handleOpenSkillsModal = useCallback(() => {
    setShowSkillsModal(true);
  }, []);
  const handleCloseSkillsModal = useCallback(() => {
    setShowSkillsModal(false);
  }, []);

  /* Photo Modal */
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const handleOpenPhotoModal = useCallback(() => {
    setShowPhotoModal(true);
  }, []);
  const handleClosePhotoModal = useCallback(() => {
    setShowPhotoModal(false);
  }, []);

  /* Vaporwave Modal 1 */
  const [showVaporwaveModal1, setShowVaporwaveModal1] = useState(false);
  const handleOpenVaporwaveModal1 = useCallback(() => {
    setShowVaporwaveModal1(true);
  }, []);
  const handleCloseVaporwaveModal1 = useCallback(() => {
    setShowVaporwaveModal1(false);
  }, []);

  /* Vaporwave Modal 2 */
  const [showVaporwaveModal2, setShowVaporwaveModal2] = useState(false);
  const handleOpenVaporwaveModal2 = useCallback(() => {
    setShowVaporwaveModal2(true);
  }, []);
  const handleCloseVaporwaveModal2 = useCallback(() => {
    setShowVaporwaveModal2(false);
  }, []);

  /* Portfolio Shortcut */
  const closePortfolio = () => {
    togglePortfolio(false);
  };

  const openExlorer = () => {
    togglePortfolio(true);
  };
  const [explorerOpened, togglePortfolio] = useState(false);

  /* CV Shortcut */

  const closeCV = () => {
    toggleCV(false);
  };

  const openCV = () => {
    toggleCV(true);
  };

  const [cvOpened, toggleCV] = useState(false);

  return (
    <ThemeProvider theme="rose">
      <GlobalStyle></GlobalStyle>
      {showAboutModal && (
        <S.layoutMain
          isMobile={isMobile}
          icon={<Progman37 variant="32x32_4" />}
          title={"About.txt"}
          closeModal={handleCloseAboutModal}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseAboutModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <Frame
              bg="white"
              boxShadow="in"
              height="100%"
              padding={20}
              style={{
                overflowY: "auto",
              }}
            >
              <div class="text-content">
                <h1>Moikka!</h1>
                <p>
                  I am Janne, UX/UI Designer working at{" "}
                  <a href="https://s-ryhma.fi/en">SOK</a> (SOK Design), the
                  largest retailing cooperative organization in Finland,
                  focusing in the redesign and development of{" "}
                  <a href="https://www.sokos.fi/fi/sokos">Sokos</a>. I am
                  working as a designer, yet strengthening my coding skills in
                  the front-end world as well.
                </p>
                <p>
                  This app, sort of a playground of ideas, has been built with
                  Create React App and{" "}
                  <a href="https://github.com/React95/React95">React95</a>, an
                  open-source Windows95 component library for React.
                </p>
                <p>
                  Oh and by the way, I made a{" "}
                  <a href="https://www.figma.com/file/2cbigNitjcruBDZT12ixIq/React95-Design-Kit">
                    Design Kit for React95
                  </a>
                  , check it out!
                </p>
              </div>
            </Frame>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showSkillsModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"Skills.txt"}
          closeModal={handleCloseSkillsModal}
          icon={<Mspaint variant="32x32_4" />}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseSkillsModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <S.layoutMainContent bg="white" boxShadow="in">
            <Frame
              bg="white"
              boxShadow="in"
              padding={20}
              style={{
                overflowY: "auto",
              }}
            >
              <div class="text-content">
                <p>
                  {" "}
                  <h1>Some of my skills</h1>I disagree with quantifying skills
                  with numbers, percentages etc. - are skills really something
                  people can measure? However, here is a rough estimate of my
                  latest skills.
                  <h2>Design</h2>
                  <h3>Adobe CC</h3>
                  <ProgressBar width={250} percent={90} />
                  <h3>Figma</h3>
                  <ProgressBar width={250} percent={85} />
                  <h3>Sketch, InVision</h3>
                  <ProgressBar width={250} percent={85} />
                  <h3>WCAG 2.1</h3>
                  <ProgressBar width={250} percent={75} />
                  <br />
                  <h2>Dev</h2>
                  <h3>Storybook(JS)</h3>
                  <ProgressBar width={250} percent={75} />
                  <h3>HTML, CSS, SASS</h3>
                  <ProgressBar width={250} percent={75} />
                  <h3>Wordpress</h3>
                  <ProgressBar width={250} percent={70} />
                  <h3>Git</h3>
                  <ProgressBar width={250} percent={40} />
                  <h3>Raspberry Pi & Arduino</h3>
                  <ProgressBar width={250} percent={30} />
                  <h3>React</h3>
                  <ProgressBar width={250} percent={25} />
                  <h3>Vue</h3>
                  <ProgressBar width={250} percent={15} />
                  <br />
                  <h2>Other Skills</h2>
                  <ul>
                    <li>Design systems</li>
                    <li>User Interviews</li>
                    <li>User Testing</li>
                    <li>Wireframing and prototyping</li>
                    <li>Visual design</li>
                    <li>Research</li>
                    <li>Copywriting and Social Media</li>
                    <li>Content creation</li>
                    <li>Workshops</li>
                    <li>Facilitation</li>
                    <li>Concept creation</li>
                  </ul>
                </p>
              </div>
            </Frame>
          </S.layoutMainContent>
        </S.layoutMain>
      )}
      {showPhotoModal && (
        <S.layoutMain
          isMobile={isMobile}
          title={"janne_compressed_for_web.jpeg"}
          closeModal={handleClosePhotoModal}
          icon={<User variant="32x32_4" />}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleClosePhotoModal}>Close</List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame
            boxShadow="none"
            style={{
              margin: "auto",
            }}
          >
            <img
              src={Janne_pixelated}
              aria-hidden
              alt="Janne as a pixelated image"
              class="full-width-image"
            ></img>
          </Frame>
          <div class="image-text">
            <p>janne_compressed_for_web.jpeg</p>
          </div>
        </S.layoutMain>
      )}
      {showVaporwaveModal1 && (
        <S.layoutMain
          isMobile={isMobile}
          closeModal={handleCloseVaporwaveModal1}
          height="100%"
          icon={<CdMusic variant="32x32_4" />}
          width={340}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseVaporwaveModal1}>
                    Close
                  </List.Item>
                </List>
              ),
            },
          ]}
          title="My_Alter_Ego.doc"
        >
          <Frame
            bg="white"
            boxShadow="in"
            padding={10}
            style={{
              overflowX: "auto",
            }}
          >
            <div class="text-content">
              <h1>A Vaporwave Album</h1>
              <p>
                In 2018 I took part in a workshop in Lithuania at the Vilnius
                Art Academy in producing a Vaporwave Album with participants
                coming in from around Europe.
              </p>
              <p>
                Over the course of the weekend we produced music videos, songs
                and more. I produced two songs for the album and a music video.
                The album can be found on streaming services.
              </p>
              <a href="https://open.spotify.com/album/0pCqTDsI4zOZXZJnxx2yPT?si=JW5qpLJJQsO3eK2m65FQBQ">
                The album on Spotify
              </a>
              <p></p>
              <br></br>
              <div>
                <iframe
                  src="https://www.youtube.com/embed/7SyxEF-QG_M"
                  frameborder="0"
                  width="100%"
                  title="A Song from a Vaporwave Album"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </Frame>
        </S.layoutMain>
      )}
      {showVaporwaveModal2 && (
        <S.layoutMain
          isMobile={isMobile}
          title={"Janne's_Ultimate_LoFi_House_Playlist.html"}
          closeModal={handleCloseVaporwaveModal2}
          height="100%"
          icon={<CdMusic variant="32x32_4" />}
          menu={[
            {
              name: "Options",
              list: (
                <List>
                  <List.Item onClick={handleCloseVaporwaveModal2}>
                    Close
                  </List.Item>
                </List>
              ),
            },
          ]}
        >
          <Frame
            style={{
              height: "300px",
            }}
          >
            <iframe
              src="https://open.spotify.com/embed/playlist/42lX7a4yx3rJJcDSimyS9S"
              width="100%"
              height="100%"
              frameborder="0"
              allowtransparency="true"
              allow="encrypted-media"
              title="The Ultimate Lo-Fi House Playlist on Spotify"
            ></iframe>
          </Frame>
        </S.layoutMain>
      )}
      <TaskBar
        list={
          <List>
            <List.Item
              as="a"
              href="mailto:janne.ilkka@gmail.com"
              icon={<Mail variant="32x32_4" />}
              target="_blank"
            >
              Email me
            </List.Item>
            <List.Divider />
            <List.Item icon={<Progman34 variant="32x32_4" />}>
              Socials
              <List>
                {socialMedia.map(({ icon, name, url }) => (
                  <List.Item
                    as="a"
                    href={url}
                    icon={icon}
                    key={name}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {name}
                  </List.Item>
                ))}
              </List>
            </List.Item>
            <List.Item icon={<CdMusic variant="32x32_4" />}>
              Tunes
              <List>
                <List.Item
                  onClick={handleOpenVaporwaveModal1}
                  icon={<CdMusic variant="32x32_4" />}
                >
                  Janne's Vaporwave Story from 2018
                </List.Item>
                <List.Item
                  onClick={handleOpenVaporwaveModal2}
                  icon={<CdMusic variant="32x32_4" />}
                >
                  Janne's Ultimate Lo-Fi House Playlist on Spotify
                </List.Item>
              </List>
            </List.Item>
            <List.Item
              icon={<User variant="32x32_4" />}
              onClick={handleOpenPhotoModal}
            >
              Janne
            </List.Item>
            <List.Item
              icon={<Mspaint variant="32x32_4" />}
              onClick={handleOpenSkillsModal}
            >
              Skills
            </List.Item>
            <List.Divider />
            <List.Item
              icon={<Progman37 variant="32x32_4" />}
              onClick={handleOpenAboutModal}
            >
              About
            </List.Item>
          </List>
        }
      />
      <React.Fragment>
        <Shortcuts openPortfolio={openExlorer} openCV={openCV} />
        {explorerOpened && (
          <Portfolio
            items={items}
            closePortfolio={closePortfolio}
            isMobile={isMobile}
          />
        )}
        {cvOpened && <CV items={items} closeCV={closeCV} isMobile={isMobile} />}
      </React.Fragment>
    </ThemeProvider>
  );
}

export default Desktop;
