import React, { useState } from "react";
import NavBar from "./NavBar";

function MainBody() {
  const [modalVisibility, setmodalVisibility] = useState(true);
  const [visibleflag, setvisibleflag] = useState(false);
  //const [hidesideBar, sethidesideBar] = useState(false);

  const toggleModalVisibllity = () => {
    setmodalVisibility(!modalVisibility);
  };
  const showSideBarShow = () => {
    if (!visibleflag) {
      document.body.classList.add("show-nav");
      setvisibleflag(true);
    } else {
      document.body.classList.remove("show-nav");
      setvisibleflag(false);
    }
  };

  return (
    <div className="container">
      <NavBar />
      <header>
        <button
          id="toggle"
          className="toggle"
          onClick={(e) => showSideBarShow()}
        >
          <i className="fa fa-bars fa-2x"></i>
        </button>

        <h1>My Landing Page</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur,
          amet!
        </p>

        <button
          className="cta-btn"
          id="open"
          onClick={(e) => toggleModalVisibllity(e)}
        >
          Sign Up1
        </button>
      </header>

      {/* Main Section */}
      <h2>What is this landing page about?</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia iure
        accusamus ab consectetur eos provident ipsa est perferendis architecto.
        Provident, quaerat asperiores. Quo esse minus repellat sapiente, impedit
        obcaecati necessitatibus.
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio
        officia ipsa. Cum dignissimos possimus et non provident facilis saepe!
      </p>

      <h2>Tell Me More</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat eaque
        delectus explicabo qui reprehenderit? Aspernatur ad similique minima
        accusamus maiores accusantium libero autem iusto reiciendis ullam
        impedit esse quibusdam, deleniti laudantium rerum beatae, deserunt nemo
        neque, obcaecati exercitationem sit. Earum.
      </p>

      <h2>Benefits</h2>
      <ul>
        <li>Lifetime Access</li>
        <li>30 Day Money Back</li>
        <li>Tailored Customer Support</li>
      </ul>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quam
        nostrum, fugiat, itaque natus officia laborum dolorum id accusantium
        culpa architecto tenetur fuga? Consequatur provident rerum eius ratione
        dolor officiis doloremque minima optio dignissimos doloribus odio
        debitis vero cumque itaque excepturi a neque, expedita nulla earum
        accusamus repellat adipisci veritatis quam. Ipsum fugiat iusto pariatur
        consectetur quas libero dolor dolores dolorem, nostrum ducimus
        doloremque placeat accusamus iste, culpa quaerat consequatur?
      </p>
      {/* Modal Container */}
      {modalVisibility ? (
        <div className="modal-container show-modal" id="modal">
          <div className="modal">
            <button
              className="close-btn"
              id="close"
              onClick={() => toggleModalVisibllity()}
            >
              <i className="fa fa-times"></i>
            </button>
            <div className="modal-header">
              <h3>Sign Up11</h3>
            </div>
            <div className="modal-content">
              <p>Register with us to get offers, support and more</p>
              <form className="modal-form">
                <div>
                  <label for="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter Name"
                    className="form-input"
                  />
                </div>
                <div>
                  <label for="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    className="form-input"
                  />
                </div>
                <div>
                  <label for="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    className="form-input"
                  />
                </div>
                <div>
                  <label for="password2">Confirm Password</label>
                  <input
                    type="password"
                    id="password2"
                    placeholder="Confirm Password"
                    className="form-input"
                  />
                </div>
                <input type="submit" value="Submit" className="submit-btn" />
              </form>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default MainBody;
