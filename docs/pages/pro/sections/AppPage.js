import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBMask,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBView,
  MDBContainer,
  MDBFormInline,
  MDBAnimation
} from 'mdbreact';
import './AppPage.css';

class AppPage extends React.Component {
  state = {
    collapsed: false
  };

  handleTogglerClick = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  componentDidMount() {
    document.querySelector('nav').style.height='65px';
  }

  componentWillUnmount() {
    document.querySelector('nav').style.height='auto';
  }

  render() {
    const overlay = (
      <div
        id='sidenav-overlay'
        style={{ backgroundColor: 'transparent' }}
        onClick={this.handleTogglerClick}
      />
    );
    return (
      <div id='apppage'>
        <Router>
          <div>
            <MDBNavbar
              color='primary-color'
              dark
              expand='md'
              fixed='top'
              scrolling
              transparent
              style={{marginTop: '65px'}}
            >
              <MDBContainer>
                <MDBNavbarBrand>
                  <strong className='white-text'>MDB</strong>
                </MDBNavbarBrand>
                <MDBNavbarToggler onClick={this.handleTogglerClick} />
                <MDBCollapse isOpen={this.state.collapsed} navbar>
                  <MDBNavbarNav left>
                    <MDBNavItem active>
                      <MDBNavLink to='#!'>Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#!'>Link</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                      <MDBNavLink to='#!'>Profile</MDBNavLink>
                    </MDBNavItem>
                  </MDBNavbarNav>
                  <MDBNavbarNav right>
                    <MDBNavItem>
                      <MDBFormInline waves>
                        <div className='md-form my-0'>
                          <input
                            className='form-control mr-sm-2'
                            type='text'
                            placeholder='Search'
                            aria-label='Search'
                          />
                        </div>
                      </MDBFormInline>
                    </MDBNavItem>
                  </MDBNavbarNav>
                </MDBCollapse>
              </MDBContainer>
            </MDBNavbar>
            {this.state.collapsed && overlay}
          </div>
        </Router>
        <MDBView>
          <MDBMask className='d-flex justify-content-center align-items-center gradient'>
            <MDBContainer>
              <MDBRow>
                  <MDBCol md='6' className='white-text text-center text-md-left mt-xl-5 mb-5'>
                    <MDBAnimation type='fadeInLeft' delay='.3s'>
                      <h1 className='h1-responsive font-weight-bold mt-sm-5'>
                        Make purchases with our app
                      </h1>
                      <hr className='hr-light' />
                      <h6 className='mb-4'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Rem repellendus quasi fuga nesciunt dolorum nulla magnam
                        veniam sapiente, fugiat! Commodi sequi non animi ea dolor
                        molestiae iste.
                      </h6>
                      <MDBBtn color='white'>Download</MDBBtn>
                      <MDBBtn outline color='white'>
                        Learn More
                      </MDBBtn>
                    </MDBAnimation>
                  </MDBCol>

                <MDBCol md='6' xl='5' className='mt-xl-5'>
                  <MDBAnimation type='fadeInRight' delay='.3s'>
                    <img
                      src='https://mdbootstrap.com/img/Mockups/Transparent/Small/admin-new.png'
                      alt=''
                      className='img-fluid'
                    />
                  </MDBAnimation>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBMask>
        </MDBView>

        <MDBContainer>
          <MDBRow className='py-5'>
            <MDBCol md='12' className='text-center'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default AppPage;