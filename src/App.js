import React from 'react';
import {Container,Row, Col, Button} from 'react-bootstrap';
import {AiOutlineTwitter, AiOutlineGithub, AiOutlineCodepen, AiOutlineMedium} from 'react-icons/ai';
import{ FaLinkedinIn, FaXing } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import './App.css';

function App() {
  return (
    <>
    <IconContext.Provider value={{color:'black', size:'2.5rem'}}>
      <Container fluid>
          <Row>
            <Col style={{padding:'0'}}>
            <Container fluid style={{backgroundColor:'#f3f3f3'}} className='hero'>
              <Row>
                <Col>
                    <div>
                      <p style={{fontSize:'2rem'}}>we aint plastic</p>
                        <img src='/imgs/rock.png'alt=''/>
                      </div>                   
                  </Col>
                  <div class="custom-shape-divider-bottom-1662058999"  style={{position:'relative'}}>
                      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                      </svg>
                    </div>
                </Row>
                    {/* <div class="custom-shape-divider-bottom-1662058999"  style={{position:'relative', bottom:0}}>
                      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                      </svg>
                    </div> */}
                </Container>

            <Container fluid='lg'>
                <Row className='about '>
        <Col>
        <h1 style={{fontSize:'4rem', fontWeight:'700', letterSpacing: '1.2rem',display:'flex', alignItems:'center', justifyContent:'center'}}>GEMS</h1>
        <div  style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'2.5rem 0'}}><hr /></div>
        <Row className='abouticons'>
          <Col  className='abouticons'><img src='/imgs/treeicon.png' alt='tree icon'/></Col>
          <Col  className='abouticons'><img src='/imgs/watericon.png' alt='tree icon'/></Col>
          <Col  className='abouticons'><img src='/imgs/windicon.png' alt='tree icon'/></Col>
          <Col  className='abouticons'><img src='/imgs/mountainicon.png' alt='tree icon'/></Col>
          <Col  className='abouticons'><img src='/imgs/leaficon.png' alt='tree icon'/></Col>
        </Row>
        <Row>
          <Col >
            <h4 className='about-heading'>Hello, I'm Roland. Creative Technologist & User Experience Engineer based in Berlin - I 
                  create digital products with knowledge and passion.</h4></Col>
          <Col >
            <p>With more than a decade of experience I tackle a broad variety of disciplines in process 
                   of creating meaningful products that make a real difference. With carefully selected tools and
                  skills I express my visions ranging from product design to the creation of user experience up to 
                  development and delivery. </p>
             <p>My distinctive strategic thinking helps me to pinpoint the holistic scope of a product and
              evolve in by adding new business ideas, innovations and values that meet user needs as well as
              business objectives.Besides building user flows, information architecture and wireframes, 
              tailor-made interactive prototypes are constantly
             </p>
            </Col>
          <Col>
          <p>putting concepts and ideas to the test and emphasize the user-centered approach in my work.
            I work with the lastest techniques in web development and my agile workflow is the result of the 
            preciselycombined tool and strategies that include object oriented patterns, build scripts, pre-processors 
            and minification, source code management, testing as well as deployment. </p>
            <p>With my knowledge in both design and technology I foster productive teams in an collabrative
              of environment that meets the requirements of creatives and developers at the same time.
            </p>
          </Col>
        </Row>
        </Col>
                </Row>
              </Container>

              <Container fluid style={{backgroundColor:'#f3f3f3'}} >
              <div class="custom-shape-divider-top-1662058812" style={{position:'relative'}}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
          </div>
              <Container fluid='lg'>
                  <Row className='work'>
        <Col>
          <h1 style={{fontSize:'4rem', fontWeight:'700', letterSpacing: '1.2rem',display:'flex', alignItems:'center', justifyContent:'center'}}>WORK</h1>
          <div  style={{display:'flex', alignItems:'center', justifyContent:'center'}}><hr /></div>
        <Row>
        <Col>
          <div>
            <h6 style={{fontSize:'2rem'}}>Expedia Meeting Market</h6>
            <p style={{color:'#87C6BD', fontSize:'1rem'}}>Onboarding</p>
          </div>
          <div>
            <h6 style={{fontSize:'2rem'}}>Atomic</h6>
            <p style={{color:'#87C6BD', fontSize:'1rem'}}>Relaunch</p>
          </div>
          <div>
            <h6 style={{fontSize:'2rem'}}>Melanie Daveid</h6>
            <p style={{color:'#87C6BD', fontSize:'1rem'}}>Portolio</p>
          </div>
          <div >
            <h6 style={{fontSize:'2rem'}}>Austria Summer Moments</h6>
            <p style={{color:'#87C6BD', fontSize:'1rem'}}>Global Campagin Website</p>
          </div>
        </Col>
        <Col >
        <div>
            <h6 style={{fontSize:'2rem'}}>Row Low </h6>
            <p style={{color:'#87C6BD', fontSize:'1rem'}}>Frontend Framework</p>
          </div>
          <div>
            <h6 style={{fontSize:'2rem'}}>Digging in the crates</h6>
            <p style={{color:'#87C6BD', fontSize:'1rem'}}>interactive Installation</p>
          </div>
          <div>
            <h6 style={{fontSize:'2rem'}}>Infinity Car Configurator</h6>
            <p style={{color:'#87C6BD', fontSize:'1rem'}}>Proof of Concept</p>
          </div>
          <div>
            <h6 style={{fontSize:'2rem'}}>Web Fundamentals</h6>
            <p style={{color:'#87C6BD', fontSize:'1rem'}}>Field Guide</p>
          </div>
        </Col>
        </Row>
        </Col>
                </Row>
                </Container>
                       <div class="custom-shape-divider-bottom-1662058999"  style={{position:'relative'}}>
                         <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                          <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                        </svg>
                      </div>
                </Container>

                <Container fluid='lg'>
                  <Row className='letters'>
                    <Col>
                      <Row>
        <h1 style={{fontSize:'4rem', fontWeight:'700', letterSpacing: '1.2rem',display:'flex', alignItems:'center', justifyContent:'center'}}>LETTERS</h1>
        <div  style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'2.5rem 0'}}><hr /></div>
        <Col  style={{width:'100%', height:'100%', display:'flex', alignItems:'center', justifyContent:'center',backgroundColor: '#F3F3F3'}}>
          <div className='letterquote'>
            "<p style={{color:'#87C6BD', fontSize:'12px', }}>Creative management</p>
              <h1 >LET ME BE YOUR RUBBER DUCK</h1>
            "
          </div>
        </Col>
        <Col >
        <div className='showbtn'>
        <h6 style={{fontSIze:'12px'}}>Workflow Management</h6>
          <h3 style={{fontSIze:'24px'}}>Developers ain't slow</h3>
            <p style={{fontSIze:'16px'}}>Finding themselves at the end of the production chain, developers tend to turn into slow and
              frustrated beasts.
            </p>
              <button>Read More </button>
              </div>
              <div className='showbtn'>
            <h6>UX DESIGN / PROTOTYPE</h6>
            <h3>A two level menu approach for mobile</h3>
            <p>Recently I've worked on a pretty complexe information architecture.Tryout a prototype I've 
              created for the mobile version of menu.</p>
              <button>Read More </button>
              </div>
        </Col>
        <Col>
          <div className='showbtn'>
            <h6>UX DESIGN / PROTOTYPE</h6>
            <h3>Pull-to-Return-A new interaction pattern ?</h3>
            <p>Recently I stumbled upon feedly's design rework and I've found a pretty neat interaction
               I'd love to share with you as a prototype</p>
               <button>Read More </button>
               </div>
               <div className='showbtn'>
               <h6>UX DESIGN / DEVELOPMENT </h6>
               <h3>Navigation - Released as a jQuery Plugin</h3>
               <p>The navigation of medium.com examined, enhanced and published as a jQuery plungin</p>
               <button>Read More </button>
               </div>
           </Col>
                       </Row>
                      </Col>
                  </Row>
                </Container>

      <Container fluid style={{backgroundColor:'#f3f3f3'}} >
        <div class="custom-shape-divider-top-1662058812" style={{position:'relative'}}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
          </div>
          <Container fluid='lg'>
      <Row className='profile'>
        <Col>
        <h1 style={{fontSize:'4rem', fontWeight:'700', letterSpacing: '1.2rem',display:'flex', alignItems:'center', justifyContent:'center', }}>PROFILE</h1>
          <div  style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'2.5rem 0'}}><hr /></div>
        <div style={{width:'100%', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:'1rem'}}>
        <p style={{width:'700px'}}>During my studies of Multimedia at the University of Applied Sciences in Augsburg, Germany, I
          adopted a greater sense for the correlation of design and design and technology and ever since I 
          create digital products with knowledge and care.
        </p>
        </div>
        <Row>
        <Col >
        <h6>Awards</h6>
          <div>
            <p>Awwwards - Site of the Day</p><p>Melanie Daveid</p></div>
          <div>
            <p>Awwwards - Site of the Day</p><p>Austria Moments</p></div>
          <div>
            <p>18th Inforgraphic Summit</p><p>Silver for the Digging in the Crates</p></div>
          <div>
            <p>17th Inforgraphic Summit</p><p>Silver for Synoptic</p></div>
        </Col>
        <Col>
        <h6>Books & Magazines</h6>
        <div><p>A touch of code</p><p>Gestalien</p></div>
        <div><p>Visual Storytelling</p><p>Gestalien</p></div>
        <div><p>Diagraphics</p><p>Harper Design</p></div>
        </Col>
        <Col>
          <h6>Online Press</h6>
          <div><p>Awwwards</p></div>
          <div><p>Deign Muzll</p></div>
          <div><p>Designer News </p></div>
          <div><p>Design Made in Germany</p></div>
          <div><p>Creative Applications</p></div>
          <div><p>Good Magazine</p></div>
          <div><p>Digital in Berlinay</p></div>
        </Col>
        </Row>
        </Col>
      </Row>
        </Container>
        <div class="custom-shape-divider-bottom-1662058999"  style={{position:'relative'}}>
           <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
           <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
        </svg>
      </div>
      </Container>

      <Container fluid='lg'>
          <Row className='workflow'>
        <Col>
        
          <h1 style={{fontSize:'4rem', fontWeight:'700', letterSpacing: '1.2rem',display:'flex', alignItems:'center', justifyContent:'center'}}>WORKFLOW</h1>
          <div  style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'2.5rem 0'}}><hr /></div>
          <div style={{width:'100%', height:'100%',display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Col >
            <div style={{width:'100%', height:'100%',display:'flex', alignItems:'center', justifyContent:'center'}}>
              <p style={{ width:'400px', display:'inline-block', fontSize:'1.6rem',  textAlign:'center'}}>
                I <a href='#disabled' style={{color:'#87C6BD', textDecoration:'none', pointer:'none'}} disable='true'>tackle </a> 
                a broaed variety of disciplines in the <a href='#disabled' style={{color:'black'}}>agile process</a>,  of creating meaningful products</p>
              </div>
              <img src='/imgs/workflow.png' alt='/' style={{width:'100%', height:'100%',display:'flex', alignItems:'center', justifyContent:'center'}}/>
              <ul style={{display:'flex', alignItems:'center', justifyContent:'center'}}>
                <li style={{ paddingRight:'7rem'}}>Research</li>
                <li  style={{marginRight:'7rem'}}>Product Design</li>
                <li  style={{marginRight:'7rem'}}>UX Design & Prototyping</li>
                <li  style={{marginRight:'7rem'}}>UI Design</li>
                <li  style={{marginRight:'7rem'}}>Development</li>
                <li  style={{marginRight:'7rem'}}>Delievery</li>
              </ul>
             </Col>
          </div>
          </Col>
          </Row>
        </Container>

        <Container fluid style={{backgroundColor:'#f3f3f3'}}>
          <div class="custom-shape-divider-top-1662058812" style={{position:'relative'}}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
            </svg>
          </div>
              <Container fluid='lg'>
        <Row className='contact'>
          <Col>
          <h1 style={{fontSize:'4rem', fontWeight:'700', letterSpacing: '1.2rem',display:'flex', alignItems:'center', justifyContent:'center',}}>CONTACT</h1>
          <div  style={{display:'flex', alignItems:'center', justifyContent:'center', margin:'2.5rem 0 5rem '}}><hr /></div>
            <h6 style={{fontSize:'1.7rem', display:'flex', alignItems:'center', justifyContent:'center'}}><a href='/' style={{color:'black', fontWeight:'bold'}}>info@weaintplastic.com</a></h6>
            <div style={{display:'flex', alignItems:'center', justifyContent:'center',margin:'3rem 0px'}}>
              <AiOutlineTwitter style={{marginRight:'30px', backgroundColor:'black', borderRadius:'10rem', color:'white'}}/>
              <AiOutlineCodepen style={{marginRight:'30px',  backgroundColor:'black', borderRadius:'10rem', color:'white'}} />
              <AiOutlineGithub style={{marginRight:'30px'}} />
              <AiOutlineMedium style={{marginRight:'30px',  backgroundColor:'black', borderRadius:'10rem', color:'white'}}/>
              <FaLinkedinIn style={{ marginRight:'30px', backgroundColor:'black', borderRadius:'10rem', color:'white'}}/>
              <FaXing style={{ marginRight:'30px', backgroundColor:'black', borderRadius:'10rem', color:'white'}}/>
            </div>
            <div style={{marginTop:'6rem',display:'flex', alignItems:'center', justifyContent:'center', width:'100%'}}>
          <Button variant='outline'>IMPRINT</Button>
          </div>
          </Col>
        </Row>
          </Container>
          </Container>
              </Col>
            </Row>
          </Container> 
      </IconContext.Provider>
    </>
  )
}

export default App;
