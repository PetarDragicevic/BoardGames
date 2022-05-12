import React from "react";
import "./Wallpaper.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

function Wallpaper() {
  return (
    <div className="cover">
      <Carousel className="carousel">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="materijal/wallpapers/nadogradnja-wallpaper.jpg"
            alt="img"
          />
          <Carousel.Caption>
            <h1>SVILENE TREPAVICE</h1>
            <a href="/nadogradnja"> <Button className="slide-btn">Saznaj vise</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="materijal/wallpapers/nokti-wallpaper.jpg"
            alt="img"
          />

          <Carousel.Caption>
            <h1>MANIKIR</h1>
            <a href="/nokti"> <Button className="slide-btn">Saznaj vise</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="materijal/wallpapers/sminka-wallpaper.jpg"
            alt="img"
          />

          <Carousel.Caption>
            <h1>ŠMINKA</h1>
            <a href="/sminka"> <Button className="slide-btn">Saznaj vise</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="materijal/wallpapers/depilacija-wallpaper.jpg"
            alt="img"
          />

          <Carousel.Caption>
            <h1>DEPILACIJA</h1>
            <a href="/depilacija"> <Button className="slide-btn">Saznaj vise</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="materijal/laser/tretman-tela.jpg"
            alt="img"
          />

          <Carousel.Caption>
            <h1>TRETMANI TELA</h1>
            <a href="/laser"> <Button className="slide-btn">Saznaj vise</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="materijal/wallpapers/tetoviranje-wallpaper.jpg"
            alt="img"
          />

          <Carousel.Caption>
            <h1>TRAJNA ŠMINKA</h1>
            <a href="/tetoviranje"> <Button className="slide-btn">Saznaj vise</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="materijal/wallpapers/epilacija-wallpaper.jpg"
            alt="img"
          />
          <Carousel.Caption>
            <h1>EPILACIJA LASEROM</h1>
            <a href="/epilacija"> <Button className="slide-btn">Saznaj vise</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Wallpaper;
