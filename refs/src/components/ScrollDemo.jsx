/* eslint-disable jsx-a11y/anchor-is-valid */
import Password from "antd/lib/input/Password";
import React, { useRef } from "react";

export function ScrollDemo() {
  const headRef = useRef(null);
  const homeRef = useRef(null);
  const productRef = useRef(null);
  const aboutRef = useRef(null);
  const careerRef = useRef(null);
  const contactRef = useRef(null);

  const scrollSmoothly = (id) => {
    if (id === "head") {
      headRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start", // default
      });
    } else if (id === "home") {
      homeRef.current.scrollIntoView({
        behavior: "smooth",
      });
    } else if (id === "product") {
      productRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    } else if (id === "about") {
      aboutRef.current.scrollIntoView({
        behavior: "smooth",
      });
    } else if (id === "career") {
      careerRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <section id="head" ref={headRef} className="header">
        <h1>Header section</h1>
        <ul>
          <li>
            <a onClick={() => scrollSmoothly("home")}>Home</a>
          </li>
          <li>
            <a onClick={() => scrollSmoothly("product")}>Products</a>
          </li>
          <li>
            <a onClick={() => scrollSmoothly("about")}>About us</a>
          </li>
          <li>
            <a onClick={() => scrollSmoothly("career")}>Careers</a>
          </li>
          <li>
            <a href="#contact">Contact us</a>
          </li>
        </ul>
      </section>
      <section ref={homeRef} id="home">
        <h1>Home</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          expedita voluptates nobis natus blanditiis, enim maiores in, neque
          voluptate commodi numquam et. Assumenda veniam eveniet odit
          perspiciatis exercitationem tenetur voluptatibus labore eaque
          expedita, officia placeat quidem quod ratione laborum hic consectetur
          porro inventore. Culpa deserunt mollitia iusto laudantium. Quasi omnis
          provident accusamus tenetur! Molestias iste perspiciatis fuga commodi
          cumque illo veritatis, quos pariatur, beatae rerum alias cupiditate
          dolores nisi assumenda numquam enim! Explicabo tempora facilis, natus,
          veritatis repellat doloremque molestias dolorem tenetur cupiditate
          unde aliquid. Ipsum itaque nisi labore, sint quis dignissimos id amet
          nobis aliquid eveniet dolorem, minus voluptas.
        </p>
      </section>
      <section ref={productRef} id="product">
        <h1>Products</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          expedita voluptates nobis natus blanditiis, enim maiores in, neque
          voluptate commodi numquam et. Assumenda veniam eveniet odit
          perspiciatis exercitationem tenetur voluptatibus labore eaque
          expedita, officia placeat quidem quod ratione laborum hic consectetur
          porro inventore. Culpa deserunt mollitia iusto laudantium. Quasi omnis
          provident accusamus tenetur! Molestias iste perspiciatis fuga commodi
          cumque illo veritatis, quos pariatur, beatae rerum alias cupiditate
          dolores nisi assumenda numquam enim! Explicabo tempora facilis, natus,
          veritatis repellat doloremque molestias dolorem tenetur cupiditate
          unde aliquid. Ipsum itaque nisi labore, sint quis dignissimos id amet
          nobis aliquid eveniet dolorem, minus voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id numquam
          deleniti sequi possimus sed illum, vero, asperiores architecto quam
          totam tempora libero atque incidunt repellendus. Maxime deserunt iusto
          aliquid voluptate, laborum vero iure delectus omnis tempore officia
          obcaecati rem ab expedita aspernatur nobis sunt eveniet consequatur
          inventore, veritatis recusandae repellendus suscipit illo quidem?
          Totam dolorum ad optio odio, quis cupiditate, doloribus ducimus
          voluptatum blanditiis enim sed dolorem sequi soluta molestias
          accusantium illum fugit sit corrupti, saepe eveniet libero praesentium
          eligendi fuga. Expedita, quas. Saepe et ducimus quisquam veritatis
          sint at? Reiciendis illum aspernatur libero, aliquam facilis quasi.
          Cupiditate, tenetur quo?
        </p>
      </section>
      <section ref={aboutRef} id="about">
        <h1>About us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          expedita voluptates nobis natus blanditiis, enim maiores in, neque
          voluptate commodi numquam et. Assumenda veniam eveniet odit
          perspiciatis exercitationem tenetur voluptatibus labore eaque
          expedita, officia placeat quidem quod ratione laborum hic consectetur
          porro inventore. Culpa deserunt mollitia iusto laudantium. Quasi omnis
          provident accusamus tenetur! Molestias iste perspiciatis fuga commodi
          cumque illo veritatis, quos pariatur, beatae rerum alias cupiditate
          dolores nisi assumenda numquam enim! Explicabo tempora facilis, natus,
          veritatis repellat doloremque molestias dolorem tenetur cupiditate
          unde aliquid. Ipsum itaque nisi labore, sint quis dignissimos id amet
          nobis aliquid eveniet dolorem, minus voluptas.
        </p>
      </section>
      <section ref={careerRef} id="career">
        <h1>Careers</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          expedita voluptates nobis natus blanditiis, enim maiores in, neque
          voluptate commodi numquam et. Assumenda veniam eveniet odit
          perspiciatis exercitationem tenetur voluptatibus labore eaque
          expedita, officia placeat quidem quod ratione laborum hic consectetur
          porro inventore. Culpa deserunt mollitia iusto laudantium. Quasi omnis
          provident accusamus tenetur! Molestias iste perspiciatis fuga commodi
          cumque illo veritatis, quos pariatur, beatae rerum alias cupiditate
          dolores nisi assumenda numquam enim! Explicabo tempora facilis, natus,
          veritatis repellat doloremque molestias dolorem tenetur cupiditate
          unde aliquid. Ipsum itaque nisi labore, sint quis dignissimos id amet
          nobis aliquid eveniet dolorem, minus voluptas.
        </p>
      </section>
      <section ref={contactRef} id="contact">
        <h1>Contact us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          expedita voluptates nobis natus blanditiis, enim maiores in, neque
          voluptate commodi numquam et. Assumenda veniam eveniet odit
          perspiciatis exercitationem tenetur voluptatibus labore eaque
          expedita, officia placeat quidem quod ratione laborum hic consectetur
          porro inventore. Culpa deserunt mollitia iusto laudantium. Quasi omnis
          provident accusamus tenetur! Molestias iste perspiciatis fuga commodi
          cumque illo veritatis, quos pariatur, beatae rerum alias cupiditate
          dolores nisi assumenda numquam enim! Explicabo tempora facilis, natus,
          veritatis repellat doloremque molestias dolorem tenetur cupiditate
          unde aliquid. Ipsum itaque nisi labore, sint quis dignissimos id amet
          nobis aliquid eveniet dolorem, minus voluptas.
        </p>
      </section>
      <button onClick={() => scrollSmoothly("head")}>Scroll to top</button>
    </div>
  );
}
