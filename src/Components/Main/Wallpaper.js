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
            <h3>NADOGRADNJA TREPAVICA</h3>
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
            <h3>MANIKIR</h3>
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
            <h3>SMINKA</h3>
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
            <h3>DEPILACIJA</h3>
            <a href="/depilacija"> <Button className="slide-btn">Saznaj vise</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="materijal/wallpapers/laser-wallpaper.jpg"
            alt="img"
          />

          <Carousel.Caption>
            <h3>LASER</h3>
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
            <h3>TETOVIRANJE OBRVA</h3>
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
            <h3>EPIKACIJA LASEROM</h3>
            <a href="/nadogradnja"> <Button className="slide-btn">Saznaj vise</Button></a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="text">
        <h1 className="display-7">DIAMOND</h1>
        <h2 className="display-8">by Jelena Dragicevic</h2>
        <p className="lead">
          "But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
        </p>
      </div>
    </div>
  );
}

export default Wallpaper;
