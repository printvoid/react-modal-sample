import React, { useState } from "react";
import NavBar from "./NavBar";
import Header from "./Header";
import Modal from "./Modal";

function MainBody() {
  const [modalVisibility, setmodalVisibility] = useState(false);
  const [visibleflag, setvisibleflag] = useState(false);

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
      <Header
        showSideBarShow={showSideBarShow}
        toggleModalVisibllity={toggleModalVisibllity}
      />

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
        <Modal toggleModalVisibllity={toggleModalVisibllity} />
      ) : (
        ""
      )}
    </div>
  );
}

export default MainBody;
