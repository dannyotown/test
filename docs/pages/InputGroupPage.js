import React from "react";
import {
  MDBContainer,
  MDBInputGroup,
  MDBBtn,
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownToggle,
  MDBIcon,
  MDBCol,
  MDBRow
} from "mdbreact";
import DocsLink from "../components/docsLink";

class InputGroupPage extends React.Component {
  componentDidMount() {
    this.Styles();
  }
  Styles = () => {
    let style = document.createElement("style");
    style.innerHTML = `
      .inpGroup .dropdown .dropdown-menu .dropdown-item:hover{
        background-color: #f8f9fa ;
        color: #16181b !important;
        box-shadow: 0 0 0 rgba(0,0,0,0) ;
      }
      `;
    let firstScriptTag = document.querySelector("script");
    firstScriptTag.parentNode.insertBefore(style, firstScriptTag);
  };

  render() {
    return (
      <MDBContainer className="inpGroup">
        <DocsLink
          title="Inputs Group"
          href="https://mdbootstrap.com/docs/react/forms/inputs/"
        />
        <MDBRow>
          <MDBCol md="6" tag="section">
            <h3 className="mb-3">Default input groups</h3>
            <p>Default styling for Bootstrap Input Group component</p>
            <MDBContainer className="border p-3">
              <MDBInputGroup
                className="mb-3"
                prepend="@"
                // placeholder="Bla foo"
              />
              <MDBInputGroup className="mb-3" append="@example.com" />
              <label htmlFor="basic-url">Your vanity URL</label>
              <MDBInputGroup
                className="mb-3"
                prepend="https://example.com/users/"
                inputID="basic-url"
              />
              <MDBInputGroup className="mb-3" prepend="$" append=".00" />
              <MDBInputGroup prepend="With textarea" inputTag="textarea" />
            </MDBContainer>
          </MDBCol>

          <MDBCol md="6" tag="section">
            <h3 className="mb-3">Material input groups</h3>
            <p>Material Design styling for Bootstrap Input Group component</p>
            <MDBContainer className="border p-3">
              <MDBInputGroup
                material
                className="mb-3 mt-0"
                prepend="@"
              />
              <MDBInputGroup
                material
                className="mb-3 mt-0"
                append="@example.com"
              />
              <label htmlFor="basic-url" className="mb-0">
                Your vanity URL
              </label>
              <MDBInputGroup
                material
                className="mb-3 mt-0"
                prepend="https://example.com/users/"
                inputID="basic-url"
              />
              <MDBInputGroup
                material
                className="mb-3"
                prepend="$"
                append=".00"
              />
              <MDBInputGroup
                material
                className="mb-0"
                prepend="With textarea"
                inputTag="textarea"
                inputType="text"
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Wrapping</h2>
        <p>
          Input groups wrap by default via flex-wrap: wrap in order to
          accommodate custom form field validation within an input group. You
          may disable this with .flex-nowrap.
        </p>
        <MDBRow>
          <MDBCol md="12" tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup className="flex-nowrap mb-3" prepend="@" />
            </MDBContainer>
          </MDBCol>
        </MDBRow>
        <h2 className="mt-5">Sizing</h2>
        <MDBRow>
          <MDBCol md="6" tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup className="mb-3" prepend="Small" size="sm" />
              <MDBInputGroup className="mb-3" prepend="Default" />
              <MDBInputGroup className="mb-3" prepend="Large" size="lg" />
            </MDBContainer>
          </MDBCol>
          <MDBCol md="6" tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                material
                className="mb-0 mt-0"
                prepend="Small"
                size="sm"
              />
              <MDBInputGroup
                material
                className="mb-3 mt-1"
                prepend="Default"
              />
              <MDBInputGroup
                material
                className="mb-0 mt-1"
                prepend="Large"
                size="lg"
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Multiple inputs</h2>

        <MDBRow>
          <MDBCol md="6" tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                prepend="First and last name"
                inputs={
                  <>
                    <input type="text" className="form-control" />
                    <input type="text" className="form-control" />
                  </>
                }
              />
            </MDBContainer>
          </MDBCol>
          <MDBCol md="6" tag="section">
            <MDBContainer className="border p-3">
              
              <MDBInputGroup
                material
                className="m-0"
                prepend="First and last name"
                inputs={
                  <>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type sth"
                    />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Type sth"
                    />
                  </>
                }
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Multiple addons</h2>

        <MDBRow>
          <MDBCol md="6" tag="section">
            <MDBContainer className="border p-3">
              
              <MDBInputGroup
                className="mb-3"
                prepend={
                  <>
                    <span className="input-group-text">$</span>
                    <span className="input-group-text">0.00</span>
                  </>
                }
              />
              <MDBInputGroup
                append={
                  <>
                    <span className="input-group-text">$</span>
                    <span className="input-group-text">0.00</span>
                  </>
                }
              />
            </MDBContainer>
          </MDBCol>
          <MDBCol md="6" tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                className="mt-0 mb-3"
                material
                prepend={
                  <>
                    <span className="input-group-text md-addon">$</span>
                    <span className="input-group-text md-addon">0.00</span>
                  </>
                }
              />
              <MDBInputGroup
                className="my-0"
                material
                append={
                  <>
                    <span className="input-group-text md-addon">$</span>
                    <span className="input-group-text md-addon">0.00</span>
                  </>
                }
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Button addons</h2>

        <MDBRow>
          <MDBCol md="6" tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                className="mb-3"
                prepend={
                  <MDBBtn
                    color="primary"
                    outline
                    size="md"
                    className="m-0 px-3 py-2 z-depth-0"
                  >
                    BUTTON
                  </MDBBtn>
                }
              />

              <MDBInputGroup
                className="mb-3"
                append={
                  <MDBBtn outline size="md" className="m-0 px-3 py-2 z-depth-0">
                    BUTTON
                  </MDBBtn>
                }
              />

              <MDBInputGroup
                className="mb-3"
                prepend={
                  <>
                    <MDBBtn
                      color="secondary"
                      outline
                      size="md"
                      className="m-0 px-3 py-2 z-depth-0"
                    >
                      BUTTON
                    </MDBBtn>
                    <MDBBtn
                      color="secondary"
                      outline
                      size="md"
                      className="m-0 px-3 py-2 z-depth-0"
                    >
                      BUTTON
                    </MDBBtn>
                  </>
                }
              />

              <MDBInputGroup
                className="mb-3"
                append={
                  <>
                    <MDBBtn
                      color="info"
                      outline
                      size="md"
                      className="m-0 px-3 py-2 z-depth-0"
                    >
                      BUTTON
                    </MDBBtn>
                    <MDBBtn
                      color="info"
                      outline
                      size="md"
                      className="m-0 px-3 py-2 z-depth-0"
                    >
                      BUTTON
                    </MDBBtn>
                  </>
                }
              />
            </MDBContainer>
          </MDBCol>
          <MDBCol md="6" tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                material
                className="mb-3 mt-0"
                prepend={
                  <MDBBtn size="md" className="m-0 px-3 py-2 z-depth-0">
                    BUTTON
                  </MDBBtn>
                }
              />

              <MDBInputGroup
                material
                className="mb-3 mt-0"
                append={
                  <MDBBtn
                    color="secondary"
                    size="md"
                    className="m-0 px-3 py-2 z-depth-0"
                  >
                    BUTTON
                  </MDBBtn>
                }
              />

              <MDBInputGroup
                material
                className="mb-3 mt-0"
                prepend={
                  <>
                    <MDBBtn
                      color="info"
                      size="md"
                      className="m-0 px-3 py-2 z-depth-1"
                    >
                      BUTTON
                    </MDBBtn>
                    <MDBBtn
                      color="info"
                      size="md"
                      className="m-0 px-3 py-2 z-depth-1"
                    >
                      BUTTON
                    </MDBBtn>
                  </>
                }
              />

              <MDBInputGroup
                material
                className="mb-3 mt-0"
                append={
                  <>
                    <MDBBtn
                      color="primary"
                      size="md"
                      className="m-0 px-3 py-2 z-depth-1"
                    >
                      BUTTON
                    </MDBBtn>
                    <MDBBtn
                      color="primary"
                      size="md"
                      className="m-0 px-3 py-2 z-depth-1"
                    >
                      BUTTON
                    </MDBBtn>
                  </>
                }
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Buttons with dropdowns</h2>
        <MDBRow>
          <MDBCol tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                className="mb-3"
                prepend={
                  <MDBDropdown>
                    <MDBDropdownToggle
                      color="primary"
                      size="md"
                      className="m-0 px-3 z-depth-0"
                    >
                      Dropdown <MDBIcon icon="caret-down" className="ml-1" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu color="white">
                      <MDBDropdownItem>
                        Action
                      </MDBDropdownItem>
                      <MDBDropdownItem>Another Action</MDBDropdownItem>
                      <MDBDropdownItem>Something else here</MDBDropdownItem>
                      <MDBDropdownItem divider />
                      <MDBDropdownItem>Separated link</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                }
              />

              <MDBInputGroup
                className="mb-3"
                append={
                  <MDBDropdown>
                    <MDBDropdownToggle
                      color="default"
                      size="md"
                      className="m-0 px-3 z-depth-0"
                    >
                      Dropdown <MDBIcon icon="caret-down" className="ml-1" />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem>Action</MDBDropdownItem>
                      <MDBDropdownItem>Another Action</MDBDropdownItem>
                      <MDBDropdownItem>Something else here</MDBDropdownItem>
                      <MDBDropdownItem divider />
                      <MDBDropdownItem>Separated link</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                }
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Segmented buttons</h2>
        <MDBRow>
          <MDBCol tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                className="mb-3"
                prepend={
                  <>
                    <MDBBtn
                      outline
                      color="primary"
                      size="md"
                      className="m-0 px-3 py-2 z-depth-0 rounded-0"
                    >
                      ACTION
                    </MDBBtn>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        outline
                        color="primary"
                        size="md"
                        className="m-0 px-2 z-depth-0 rounded-0"
                      >
                        <MDBIcon icon="caret-down" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem>Action</MDBDropdownItem>
                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </>
                }
              />

              <MDBInputGroup
                className="mb-3"
                append={
                  <>
                    <MDBBtn
                      outline
                      color="info"
                      size="md"
                      className="m-0 px-3 py-2 z-depth-0 rounded-0"
                    >
                      ACTION
                    </MDBBtn>
                    <MDBDropdown>
                      <MDBDropdownToggle
                        outline
                        color="info"
                        size="md"
                        className="m-0 px-2 z-depth-0 rounded-0"
                      >
                        <MDBIcon icon="caret-down" />
                      </MDBDropdownToggle>
                      <MDBDropdownMenu>
                        <MDBDropdownItem>Action</MDBDropdownItem>
                        <MDBDropdownItem>Another Action</MDBDropdownItem>
                        <MDBDropdownItem>Something else here</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <MDBDropdownItem>Separated link</MDBDropdownItem>
                      </MDBDropdownMenu>
                    </MDBDropdown>
                  </>
                }
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Custom select</h2>

        <MDBRow>
          <MDBCol tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                className="mb-3"
                prepend="Options"
                inputs={
                  <select className="browser-default custom-select">
                    <option value="0">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                }
              />

              <MDBInputGroup
                className="mb-3"
                append="Options"
                inputs={
                  <select className="browser-default custom-select">
                    <option value="0">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                }
              />

              <MDBInputGroup
                className="mb-3"
                prepend={
                  <MDBBtn
                    color="mdb-color"
                    outline
                    size="md"
                    className="m-0 px-3 py-2 z-depth-0"
                  >
                    BUTTON
                  </MDBBtn>
                }
                inputs={
                  <select className="browser-default custom-select">
                    <option value="0">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                }
              />

              <MDBInputGroup
                className="mb-3"
                append={
                  <MDBBtn
                    color="mdb-color"
                    outline
                    size="md"
                    className="m-0 px-3 py-2 z-depth-0"
                  >
                    BUTTON
                  </MDBBtn>
                }
                inputs={
                  <select className="browser-default custom-select">
                    <option value="0">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                }
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Custom file input</h2>

        <MDBRow>
          <MDBCol tag="section">
            <MDBContainer className="border p-3">
              <MDBInputGroup
                prepend="Upload"
                inputs={
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      Choose file
                    </label>
                  </div>
                }
                className="mb-3"
              />

              <MDBInputGroup
                append="Upload"
                inputs={
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      Choose file
                    </label>
                  </div>
                }
                className="mb-3"
              />

              <MDBInputGroup
                prepend={
                  <MDBBtn
                    color="mdb-color"
                    outline
                    size="md"
                    className="m-0 px-3 py-2 z-depth-0"
                  >
                    BUTTON
                  </MDBBtn>
                }
                inputs={
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      Choose file
                    </label>
                  </div>
                }
                className="mb-3"
              />

              <MDBInputGroup
                append={
                  <MDBBtn
                    color="mdb-color"
                    outline
                    size="md"
                    className="m-0 px-3 py-2 z-depth-0"
                  >
                    BUTTON
                  </MDBBtn>
                }
                inputs={
                  <div className="custom-file">
                    <input
                      type="file"
                      className="custom-file-input"
                      id="inputGroupFile01"
                    />
                    <label
                      className="custom-file-label"
                      htmlFor="inputGroupFile01"
                    >
                      Choose file
                    </label>
                  </div>
                }
                className="mb-3"
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>

        <h2 className="mt-5">Examples & customizations</h2>
        <MDBRow>
          <MDBCol tag="section">
            <h3 className="mb-3">Colorful input groups</h3>
            <p>Default styling for Bootstrap Input Group component</p>
            <MDBContainer className="border p-3">
              <MDBInputGroup
                className="mb-3"
                prepend="@"
                textClassName="amber lighten-3"
                placeholder="Username"
              />
              <MDBInputGroup
                className="mb-3"
                prepend={
                  <>
                    <span className="input-group-text red lighten-3">$</span>
                    <span className="input-group-text red lighten-3">0.00</span>
                  </>
                }
              />
              <MDBInputGroup
                className="mb-3"
                prepend="$"
                append=".00"
                textClassName="lime lighten-2"
                inputClassName="border-warning"
              />

              <MDBInputGroup
                className="mb-3"
                append="@example.com"
                textClassName="purple lighten-3"
                placeholder="Recipient's Username"
              />

              <label htmlFor="basic-url2">Your vanity URL</label>
              <MDBInputGroup
                className="mb-3"
                prepend="https://example.com/users/"
                textClassName="blue lighten-3"
                inputID="basic-url2"
              />
            </MDBContainer>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default InputGroupPage;
